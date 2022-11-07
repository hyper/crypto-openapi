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

import { Chain } from './Chain';
import { HttpFile } from '../http/http';

export class WalletCreateRequest {
    'address'?: string;
    'chain'?: Chain;
    'customer'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "Chain",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WalletCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

