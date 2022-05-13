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
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { PayoutWallet } from './PayoutWallet';
import { HttpFile } from '../http/http';

export class AccountAllOf {
    'branding'?: AccountAllOfBranding;
    'connected_accounts'?: Array<string> | Array<Account>;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string | Account;
    'payout_wallets'?: Array<PayoutWallet>;
    'platform_account': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return AccountAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

