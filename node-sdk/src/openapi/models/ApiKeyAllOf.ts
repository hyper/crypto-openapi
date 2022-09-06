/**
 * Pluto
 * The API for Pluto
 *
 * OpenAPI spec version: 1.0
 * Contact: support@pluto.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from './Account';
import { HttpFile } from '../http/http';

export class ApiKeyAllOf {
    'account': string | Account;
    'name'?: string;
    'note'?: string;
    'key': ApiKeyAllOfKeyEnum;
    'type': ApiKeyAllOfTypeEnum;
    'last_used'?: Date;
    'admin': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "ApiKeyAllOfKeyEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ApiKeyAllOfTypeEnum",
            "format": ""
        },
        {
            "name": "last_used",
            "baseName": "last_used",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiKeyAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ApiKeyAllOfKeyEnum = "publishable" | "secret" | "restricted" ;
export type ApiKeyAllOfTypeEnum = "publishable" | "secret" | "restricted" ;

