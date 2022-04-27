export * from './APIKey';
export * from './Account';
export * from './AccountBranding';
export * from './Customer';
export * from './CustomerBillingDetails';
export * from './CustomerBillingDetailsAddress';
export * from './CustomersBillingDetails';
export * from './CustomersBillingDetailsAddress';
export * from './Fee';
export * from './InlineObject';
export * from './InlineObject1';
export * from './InlineObject2';
export * from './InlineObject3';
export * from './InlineObject4';
export * from './InlineObject5';
export * from './InlineObject6';
export * from './InlineObject7';
export * from './InlineObject8';
export * from './InlineResponse200';
export * from './InlineResponse2001';
export * from './InlineResponse2002';
export * from './InlineResponse2003';
export * from './InlineResponse2004';
export * from './InlineResponse2005';
export * from './InlineResponse2006';
export * from './InlineResponse2007';
export * from './InlineResponse2008';
export * from './Invoice';
export * from './Log';
export * from './Payment';
export * from './PayoutWallet';
export * from './Product';
export * from './Transaction';
export * from './Transfer';
export * from './Wallet';
export * from './Webhook';

import { APIKey     , APIKeyTypeEnum   } from './APIKey';
import { Account } from './Account';
import { AccountBranding } from './AccountBranding';
import { Customer } from './Customer';
import { CustomerBillingDetails } from './CustomerBillingDetails';
import { CustomerBillingDetailsAddress } from './CustomerBillingDetailsAddress';
import { CustomersBillingDetails } from './CustomersBillingDetails';
import { CustomersBillingDetailsAddress } from './CustomersBillingDetailsAddress';
import { Fee } from './Fee';
import { InlineObject } from './InlineObject';
import { InlineObject1 } from './InlineObject1';
import { InlineObject2 } from './InlineObject2';
import { InlineObject3 } from './InlineObject3';
import { InlineObject4 } from './InlineObject4';
import { InlineObject5 } from './InlineObject5';
import { InlineObject6 } from './InlineObject6';
import { InlineObject7 } from './InlineObject7';
import { InlineObject8 } from './InlineObject8';
import { InlineResponse200 } from './InlineResponse200';
import { InlineResponse2001 } from './InlineResponse2001';
import { InlineResponse2002 } from './InlineResponse2002';
import { InlineResponse2003 } from './InlineResponse2003';
import { InlineResponse2004 } from './InlineResponse2004';
import { InlineResponse2005 } from './InlineResponse2005';
import { InlineResponse2006 } from './InlineResponse2006';
import { InlineResponse2007 } from './InlineResponse2007';
import { InlineResponse2008 } from './InlineResponse2008';
import { Invoice  , InvoiceChainEnum   , InvoiceCurrencyEnum       , InvoiceStatusEnum     } from './Invoice';
import { Log      , LogMethodEnum      } from './Log';
import { Payment         , PaymentStatusEnum     } from './Payment';
import { PayoutWallet   , PayoutWalletChainEnum     } from './PayoutWallet';
import { Product     , ProductCurrencyEnum     } from './Product';
import { Transaction  , TransactionChainEnum   , TransactionCurrencyEnum       , TransactionStatusEnum    } from './Transaction';
import { Transfer } from './Transfer';
import { Wallet   , WalletChainEnum      } from './Wallet';
import { Webhook } from './Webhook';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "APIKeyTypeEnum",
    "InvoiceChainEnum",
    "InvoiceCurrencyEnum",
    "InvoiceStatusEnum",
    "LogMethodEnum",
    "PaymentStatusEnum",
    "PayoutWalletChainEnum",
    "ProductCurrencyEnum",
    "TransactionChainEnum",
    "TransactionCurrencyEnum",
    "TransactionStatusEnum",
    "WalletChainEnum",
]);

let typeMap: {[index: string]: any} = {
    "APIKey": APIKey,
    "Account": Account,
    "AccountBranding": AccountBranding,
    "Customer": Customer,
    "CustomerBillingDetails": CustomerBillingDetails,
    "CustomerBillingDetailsAddress": CustomerBillingDetailsAddress,
    "CustomersBillingDetails": CustomersBillingDetails,
    "CustomersBillingDetailsAddress": CustomersBillingDetailsAddress,
    "Fee": Fee,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineObject6": InlineObject6,
    "InlineObject7": InlineObject7,
    "InlineObject8": InlineObject8,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "Invoice": Invoice,
    "Log": Log,
    "Payment": Payment,
    "PayoutWallet": PayoutWallet,
    "Product": Product,
    "Transaction": Transaction,
    "Transfer": Transfer,
    "Wallet": Wallet,
    "Webhook": Webhook,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
