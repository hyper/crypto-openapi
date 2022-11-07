/**
 * api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SubscriptionUpdateRequest {
    'cancel_at'?: Date | number;
    'cancel_at_period_end'?: boolean;
    'current_period_end'?: Date | number;
    'current_period_start'?: Date | number;
    'metadata'?: { [key: string]: any; };
    'pause_collection'?: boolean;
    'price'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cancel_at",
            "baseName": "cancel_at",
            "type": "Date | number",
            "format": ""
        },
        {
            "name": "cancel_at_period_end",
            "baseName": "cancel_at_period_end",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "current_period_end",
            "baseName": "current_period_end",
            "type": "Date | number",
            "format": ""
        },
        {
            "name": "current_period_start",
            "baseName": "current_period_start",
            "type": "Date | number",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "pause_collection",
            "baseName": "pause_collection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

