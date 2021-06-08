/* tslint:disable */
/* eslint-disable */
/**
 * Athene
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Indicator,
    IndicatorFromJSON,
    IndicatorFromJSONTyped,
    IndicatorToJSON,
} from './';

/**
 * 
 * @export
 * @interface Objective
 */
export interface Objective {
    /**
     * 
     * @type {string}
     * @memberof Objective
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    target: number;
    /**
     * 
     * @type {number}
     * @memberof Objective
     */
    window: number;
    /**
     * 
     * @type {Indicator}
     * @memberof Objective
     */
    indicator?: Indicator;
}

export function ObjectiveFromJSON(json: any): Objective {
    return ObjectiveFromJSONTyped(json, false);
}

export function ObjectiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): Objective {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'target': json['target'],
        'window': json['window'],
        'indicator': !exists(json, 'indicator') ? undefined : IndicatorFromJSON(json['indicator']),
    };
}

export function ObjectiveToJSON(value?: Objective | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'target': value.target,
        'window': value.window,
        'indicator': IndicatorToJSON(value.indicator),
    };
}


