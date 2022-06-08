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
import { InvoiceAllOfLineItems } from './InvoiceAllOfLineItems';
import { Payment } from './Payment';
import { Price } from './Price';
import { Subscription } from './Subscription';
import { SubscriptionPeriod } from './SubscriptionPeriod';
import { Transaction } from './Transaction';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class InvoiceAllOf {
    'account': string | Account;
    'platform_account'?: string | Account;
    'amount_paid'?: number;
    'application_fee_percent'?: number;
    'chain': InvoiceAllOfChainEnum;
    'amount': number;
    'currency': InvoiceAllOfCurrencyEnum;
    'status': InvoiceAllOfStatusEnum;
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
    'line_items'?: InvoiceAllOfLineItems;
    'trial_period_duration'?: number;
    'send_reminders'?: string;
    'period'?: string | SubscriptionPeriod;
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "type": "InvoiceAllOfChainEnum",
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
            "type": "InvoiceAllOfCurrencyEnum",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceAllOfStatusEnum",
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
            "name": "period",
            "baseName": "period",
            "type": "string | SubscriptionPeriod",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InvoiceAllOfChainEnum = "eth" | "sol" ;
export type InvoiceAllOfCurrencyEnum = "eth" | "sol" ;
export type InvoiceAllOfStatusEnum = "open" | "paid" | "unpaid" | "void" | "past_due" ;

