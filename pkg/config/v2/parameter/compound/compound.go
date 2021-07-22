// @license
// Copyright 2021 Dynatrace LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package compound

import (
	"bytes"
	"fmt"
	"text/template"

	"github.com/dynatrace-oss/dynatrace-monitoring-as-code/pkg/config/v2/coordinate"
	"github.com/dynatrace-oss/dynatrace-monitoring-as-code/pkg/config/v2/errors"
	"github.com/dynatrace-oss/dynatrace-monitoring-as-code/pkg/config/v2/parameter"
	"github.com/dynatrace-oss/dynatrace-monitoring-as-code/pkg/util"
)

// CompoundParameterType specifies the type of the parameter used in config files
const CompoundParameterType = "compound"

var CompoundParameterSerde = parameter.ParameterSerDe{
	Serializer:   writeCompoundParameter,
	Deserializer: parseCompoundParameter,
}

type CompoundParameter struct {
	format               *template.Template
	rawFormatString      string
	referencedParameters []parameter.ParameterReference
}

// this forces the compiler to check if CompoundParameter is of type Parameter
var _ parameter.Parameter = (*CompoundParameter)(nil)

func (p *CompoundParameter) GetType() string {
	return CompoundParameterType
}

func (p *CompoundParameter) GetReferences() []parameter.ParameterReference {
	return p.referencedParameters
}

func (p *CompoundParameter) ResolveValue(context parameter.ResolveContext) (interface{}, error) {
	compoundData := make(map[string]interface{})

	for _, param := range p.referencedParameters {
		compoundData[param.Property] = context.ResolvedParameterValues[param.Property]
	}

	out := bytes.Buffer{}
	err := p.format.Execute(&out, compoundData)

	if err != nil {
		return nil, fmt.Errorf("error resolving compound value: %v", err)
	}

	return out.String(), nil

}

// parseCompoundParameter parses a given context into an instance of CompoundParameter.
// This requires a string `format` and a slice of strings `references`, where `format`
// is a template string and `references` are all the used references in `format` refering
// to other parameters within the config.
func parseCompoundParameter(context parameter.ParameterParserContext) (parameter.Parameter, error) {
	formatInterface, ok := context.Value["format"]
	if !ok {
		return nil, createParameterParseError(context, "missing property `format`")
	}

	format, err := template.New(context.ParameterName).Option("missingkey=error").Parse(util.ToString(formatInterface))
	if err != nil {
		return nil, createParameterParseError(context, "format is not a valid template: %v", err)
	}

	references, ok := context.Value["references"]
	if !ok {
		return nil, createParameterParseError(context, "missing property `references`")
	}

	referencedParameterSlice, ok := references.([]interface{})
	if !ok {
		return nil, createParameterParseError(context, "malformed value `references`")
	}

	referencedParameters, err := toParameterReferences(referencedParameterSlice, context.Coordinate)
	if err != nil {
		return nil, createParameterParseError(context, "invalid parameter references: %v", err)
	}

	return &CompoundParameter{
		format:               format,
		rawFormatString:      util.ToString(formatInterface),
		referencedParameters: referencedParameters,
	}, nil
}

func writeCompoundParameter(context parameter.ParameterWriterContext) (map[string]interface{}, error) {
	compoundParam, ok := context.Parameter.(*CompoundParameter)

	if !ok {
		return nil, &parameter.ParameterWriterError{
			Location: context.Coordinate,
			EnvironmentDetails: errors.EnvironmentDetails{
				Group:       context.Group,
				Environment: context.Environment,
			},
			ParameterName: context.ParameterName,
			Reason:        "unexpected type. parameter is not of type `CompoundParameter`",
		}
	}

	result := make(map[string]interface{})

	if compoundParam.rawFormatString == "" {
		return nil, createParameterWriteError(context, "missing property `format`")
	}
	result["format"] = compoundParam.rawFormatString

	if len(compoundParam.referencedParameters) == 0 {
		return nil, createParameterWriteError(context, "missing property `references`")
	}
	references := make([]interface{}, len(compoundParam.referencedParameters))

	for i, reference := range compoundParam.referencedParameters {
		references[i] = reference.Property
	}
	result["references"] = references

	return result, nil
}

func createParameterParseError(context parameter.ParameterParserContext, reason string, a ...interface{}) error {
	return &parameter.ParameterParserError{
		Location: context.Coordinate,
		EnvironmentDetails: errors.EnvironmentDetails{
			Group:       context.Group,
			Environment: context.Environment,
		},
		ParameterName: context.ParameterName,
		Reason:        fmt.Sprintf(reason, a...),
	}
}

func createParameterWriteError(context parameter.ParameterWriterContext, reason string, a ...interface{}) error {
	return &parameter.ParameterWriterError{
		Location: context.Coordinate,
		EnvironmentDetails: errors.EnvironmentDetails{
			Group:       context.Group,
			Environment: context.Environment,
		},
		ParameterName: context.ParameterName,
		Reason:        fmt.Sprintf(reason, a...),
	}
}

func toParameterReferences(params []interface{}, coord coordinate.Coordinate) (paramRefs []parameter.ParameterReference, err error) {
	for _, param := range params {
		switch param.(type) {
		case []interface{}, map[interface{}]interface{}:
			return nil, fmt.Errorf("error creating parameter reference: %v is not a string", param)
		}

		paramRefs = append(paramRefs, parameter.ParameterReference{
			Config:   coord,
			Property: util.ToString(param),
		})
	}
	return paramRefs, nil
}