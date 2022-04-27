/**
 * Prism
 * The API for Prism
 *
 * OpenAPI spec version: 1.0
 * Contact: support@prism.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class WebhookData {
    'account': string;
    'endpoint_url': string;
    'event_types': Array<string>;
    'secret'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpoint_url",
            "baseName": "endpoint_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "event_types",
            "baseName": "event_types",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookData.attributeTypeMap;
    }

    public constructor() {
    }
}

