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

export class InlineObject2 {
    'account': string;
    'amount': number;
    'chain': string;
    'currency': string;
    'customer': string;
    'due'?: string;
    'number': string;
    'product'?: string;
    'transaction': string;
    'wallet': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string",
            "format": ""
        },
        {
            "name": "due",
            "baseName": "due",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "string",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject2.attributeTypeMap;
    }

    public constructor() {
    }
}

