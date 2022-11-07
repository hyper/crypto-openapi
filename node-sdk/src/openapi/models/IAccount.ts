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

import { IBranding } from './IBranding';
import { IBusinessProfile } from './IBusinessProfile';
import { IIntegrations } from './IIntegrations';
import { ISettings } from './ISettings';
import { ITeamMember } from './ITeamMember';
import { HttpFile } from '../http/http';

export class IAccount {
    'application_fee_percent': number;
    'branding': IBranding;
    'business_profile': IBusinessProfile;
    'connected_accounts': Array<string>;
    'created': number;
    'id': string;
    'integrations': IIntegrations;
    'invoice_prefix'?: string;
    'object': string;
    'parent_account'?: string;
    'platform_account': boolean;
    'settings': ISettings;
    'team': Array<ITeamMember>;
    'test': boolean;
    'verified': boolean;
    'webhook_portal'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "branding",
            "baseName": "branding",
            "type": "IBranding",
            "format": ""
        },
        {
            "name": "business_profile",
            "baseName": "business_profile",
            "type": "IBusinessProfile",
            "format": ""
        },
        {
            "name": "connected_accounts",
            "baseName": "connected_accounts",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": "double"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "integrations",
            "baseName": "integrations",
            "type": "IIntegrations",
            "format": ""
        },
        {
            "name": "invoice_prefix",
            "baseName": "invoice_prefix",
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
            "name": "parent_account",
            "baseName": "parent_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "ISettings",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "Array<ITeamMember>",
            "format": ""
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "webhook_portal",
            "baseName": "webhook_portal",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IAccount.attributeTypeMap;
    }

    public constructor() {
    }
}

