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
import { Invoice } from './Invoice';
import { Model } from './Model';
import { Product } from './Product';
import { TransactionAllOf } from './TransactionAllOf';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class Transaction {
    'account'?: string | Account;
    'amount': number;
    'chain': TransactionChainEnum;
    'currency': TransactionCurrencyEnum;
    'customer'?: string | Customer;
    'invoice': string | Invoice;
    'platform_account'?: string | Account;
    'product'?: string | Product;
    'status': TransactionStatusEnum;
    'wallet'?: string | Wallet;
    'created': Date;
    'id': string;
    'test': boolean;

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
            "type": "TransactionChainEnum",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "TransactionCurrencyEnum",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string | Invoice",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "string | Account",
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
            "type": "TransactionStatusEnum",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | Wallet",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
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
            "name": "test",
            "baseName": "test",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TransactionChainEnum = "eth" | "sol" ;
export type TransactionCurrencyEnum = "eth" | "sol" ;
export type TransactionStatusEnum = "pending" | "failed" | "succeeded" | "canceled" | "refunded" ;

