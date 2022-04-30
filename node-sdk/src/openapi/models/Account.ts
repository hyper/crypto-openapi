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

import { AccountAllOf } from './AccountAllOf';
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { Model } from './Model';
import { PayoutWallet } from './PayoutWallet';
import { HttpFile } from '../http/http';

export class Account {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'branding'?: AccountAllOfBranding;
    'connected_accounts'?: Array<string> | Array<Account>;
    'eth_wallet'?: PayoutWallet;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string | Account;
    'payout_wallets'?: Array<PayoutWallet>;
    'platform_account': boolean;
    'sol_wallet'?: PayoutWallet;

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
            "name": "branding",
            "baseName": "branding",
            "type": "AccountAllOfBranding",
            "format": ""
        },
        {
            "name": "connected_accounts",
            "baseName": "connected_accounts",
            "type": "Array<string> | Array<Account>",
            "format": ""
        },
        {
            "name": "eth_wallet",
            "baseName": "eth_wallet",
            "type": "PayoutWallet",
            "format": ""
        },
        {
            "name": "invoice_prefix",
            "baseName": "invoice_prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "parent_account",
            "baseName": "parent_account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "payout_wallets",
            "baseName": "payout_wallets",
            "type": "Array<PayoutWallet>",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sol_wallet",
            "baseName": "sol_wallet",
            "type": "PayoutWallet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }

    public constructor() {
    }
}

