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

import { Account } from './Account';
import { Invoice } from './Invoice';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class TransferAllOf {
    'account': string | Account;
    'amount': number;
    'description'?: string;
    'invoice': string | Invoice;
    'percent': number;
    'usd_amount': number;
    'wallet': string | Wallet;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string | Invoice",
            "format": ""
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "usd_amount",
            "baseName": "usd_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | Wallet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransferAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

