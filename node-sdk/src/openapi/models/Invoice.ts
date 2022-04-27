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
import { Customer } from './Customer';
import { Product } from './Product';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class Invoice {
    'account'?: string | Account;
    'amount'?: number;
    'chain'?: InvoiceChainEnum;
    'created': Date;
    'currency'?: InvoiceCurrencyEnum;
    'customer'?: string | Customer;
    'due'?: Date;
    'id': string;
    'number'?: string;
    'product'?: string | Product;
    'status'?: InvoiceStatusEnum;
    'transaction'?: string;
    'wallet'?: string | Wallet;

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
            "name": "chain",
            "baseName": "chain",
            "type": "InvoiceChainEnum",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "InvoiceCurrencyEnum",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "due",
            "baseName": "due",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
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
            "type": "string | Product",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceStatusEnum",
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
            "type": "string | Wallet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Invoice.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InvoiceChainEnum = "eth" | "sol" ;
export type InvoiceCurrencyEnum = "eth" | "sol" ;
export type InvoiceStatusEnum = "open" | "paid" | "unpaid" | "void" ;

