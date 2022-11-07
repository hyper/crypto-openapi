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
import { Currency } from './Currency';
import { LineItem } from './LineItem';
import { PaymentIntentStatus } from './PaymentIntentStatus';
import { HttpFile } from '../http/http';

export class IPaymentIntent {
    'account': string;
    'amount': number;
    'amount_before_discount'?: number;
    'application_fee_percent'?: number;
    'chain': Chain;
    'checkout'?: string;
    'coupon'?: string;
    'created': number;
    'currency': Currency;
    'customer': string;
    'exchange_rate': number;
    'hash'?: string;
    'id': string;
    'invoice'?: string;
    'last_payment_error'?: string;
    'line_items': Array<LineItem>;
    'metadata': { [key: string]: any; };
    'object': string;
    'platform_account'?: string;
    'price'?: string;
    'receipt_pdf'?: string;
    'status': PaymentIntentStatus;
    'subscription'?: string;
    'test': boolean;
    'usd_amount': number;
    'wallet'?: string;

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
            "format": "double"
        },
        {
            "name": "amount_before_discount",
            "baseName": "amount_before_discount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "Chain",
            "format": ""
        },
        {
            "name": "checkout",
            "baseName": "checkout",
            "type": "string",
            "format": ""
        },
        {
            "name": "coupon",
            "baseName": "coupon",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": "double"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string",
            "format": ""
        },
        {
            "name": "exchange_rate",
            "baseName": "exchange_rate",
            "type": "number",
            "format": "double"
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string",
            "format": ""
        },
        {
            "name": "last_payment_error",
            "baseName": "last_payment_error",
            "type": "string",
            "format": ""
        },
        {
            "name": "line_items",
            "baseName": "line_items",
            "type": "Array<LineItem>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
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
            "name": "receipt_pdf",
            "baseName": "receipt_pdf",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentIntentStatus",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string",
            "format": ""
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "usd_amount",
            "baseName": "usd_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IPaymentIntent.attributeTypeMap;
    }

    public constructor() {
    }
}

