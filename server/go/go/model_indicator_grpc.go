/*
 * Athene
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type IndicatorGrpc struct {
	Metric string `json:"metric,omitempty"`

	Service string `json:"service,omitempty"`

	Method string `json:"method,omitempty"`

	Matchers []string `json:"matchers,omitempty"`

	ErrorMatchers []string `json:"errorMatchers,omitempty"`
}
