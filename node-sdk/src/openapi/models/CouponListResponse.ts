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

import { ICoupon } from './ICoupon';
import { HttpFile } from '../http/http';

export class CouponListResponse {
    'data': Array<ICoupon>;
    'has_more': boolean;
    'page': number;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ICoupon>",
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
        return CouponListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

