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
import { Fee } from './Fee';
import { InvoiceAllOf } from './InvoiceAllOf';
import { InvoiceAllOfLineItems } from './InvoiceAllOfLineItems';
import { Model } from './Model';
import { Payment } from './Payment';
import { Price } from './Price';
import { Subscription } from './Subscription';
import { SubscriptionPeriod } from './SubscriptionPeriod';
import { Transaction } from './Transaction';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class Invoice {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account'?: string | Account;
    'amount_paid'?: number;
    'application_fee_percent'?: number;
    'chain': InvoiceChainEnum;
    'amount': number;
    'currency': InvoiceCurrencyEnum;
    'status': InvoiceStatusEnum;
    'due'?: number;
    'number': string;
    'customer': string | Customer;
    'price': string | Price;
    'wallet': string | Wallet;
    'payment'?: Payment;
    'transactions': Array<Transaction>;
    'fees': Array<Fee>;
    'transfers': Array<Transfer>;
    'subscription'?: string | Subscription;
    'subscription_period'?: string | SubscriptionPeriod;
    'line_items'?: InvoiceAllOfLineItems;
    'trial_period_duration'?: number;
    'send_reminders'?: string;
    'renewal'?: boolean;
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "object",
            "baseName": "object",
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
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "amount_paid",
            "baseName": "amount_paid",
            "type": "number",
            "format": ""
        },
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
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
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "InvoiceCurrencyEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceStatusEnum",
            "format": ""
        },
        {
            "name": "due",
            "baseName": "due",
            "type": "number",
            "format": "date-time"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string | Price",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | Wallet",
            "format": ""
        },
        {
            "name": "payment",
            "baseName": "payment",
            "type": "Payment",
            "format": ""
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<Transaction>",
            "format": ""
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "Array<Fee>",
            "format": ""
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<Transfer>",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string | Subscription",
            "format": ""
        },
        {
            "name": "subscription_period",
            "baseName": "subscription_period",
            "type": "string | SubscriptionPeriod",
            "format": ""
        },
        {
            "name": "line_items",
            "baseName": "line_items",
            "type": "InvoiceAllOfLineItems",
            "format": ""
        },
        {
            "name": "trial_period_duration",
            "baseName": "trial_period_duration",
            "type": "number",
            "format": ""
        },
        {
            "name": "send_reminders",
            "baseName": "send_reminders",
            "type": "string",
            "format": ""
        },
        {
            "name": "renewal",
            "baseName": "renewal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
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
export type InvoiceStatusEnum = "open" | "paid" | "unpaid" | "void" | "past_due" ;

