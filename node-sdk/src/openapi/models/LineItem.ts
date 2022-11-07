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

import { IPrice } from './IPrice';
import { HttpFile } from '../http/http';

export class LineItem {
    'description'?: string;
    'price': string;
    'price_data'?: IPrice;
    'quantity': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "price_data",
            "baseName": "price_data",
            "type": "IPrice",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return LineItem.attributeTypeMap;
    }

    public constructor() {
    }
}

