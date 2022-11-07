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

import { ITransfer } from './ITransfer';
import { HttpFile } from '../http/http';

export class TransferListResponse {
    'data': Array<ITransfer>;
    'has_more': boolean;
    'page': number;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ITransfer>",
            "format": ""
        },
        {
            "name": "has_more",
            "baseName": "has_more",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "number",
            "format": "double"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return TransferListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

