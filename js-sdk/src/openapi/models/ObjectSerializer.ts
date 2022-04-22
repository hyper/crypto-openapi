export * from './APIKey';
export * from './Account';
export * from './AccountBranding';
export * from './Customer';
export * from './CustomerBillingDetails';
export * from './CustomerBillingDetailsAddress';
export * from './Fee';
export * from './InlineObject';
export * from './InlineObject1';
export * from './InlineObject2';
export * from './InlineObject3';
export * from './InlineObject4';
export * from './InlineObject5';
export * from './InlineResponse200';
export * from './InlineResponse2001';
export * from './InlineResponse20010';
export * from './InlineResponse20010Request';
export * from './InlineResponse20010RequestBody';
export * from './InlineResponse20010RequestHeaders';
export * from './InlineResponse20010Response';
export * from './InlineResponse20010ResponseBody';
export * from './InlineResponse20010ResponseBodyBranding';
export * from './InlineResponse20011';
export * from './InlineResponse20011Data';
export * from './InlineResponse20012';
export * from './InlineResponse20013';
export * from './InlineResponse20013Data';
export * from './InlineResponse20014';
export * from './InlineResponse20015';
export * from './InlineResponse20016';
export * from './InlineResponse20017';
export * from './InlineResponse20017Data';
export * from './InlineResponse20018';
export * from './InlineResponse20019';
export * from './InlineResponse20019Data';
export * from './InlineResponse2002';
export * from './InlineResponse20020';
export * from './InlineResponse20021';
export * from './InlineResponse2003';
export * from './InlineResponse2003Data';
export * from './InlineResponse2004';
export * from './InlineResponse2005';
export * from './InlineResponse2006';
export * from './InlineResponse2006Data';
export * from './InlineResponse2007';
export * from './InlineResponse2008';
export * from './InlineResponse2009';
export * from './InlineResponse200BillingDetails';
export * from './InlineResponse200BillingDetailsAddress';
export * from './InlineResponse200Data';
export * from './Invoice';
export * from './Payment';
export * from './Product';
export * from './Wallet';
export * from './Webhook';

import { APIKey     , APIKeyTypeEnum   } from './APIKey';
import { Account } from './Account';
import { AccountBranding } from './AccountBranding';
import { Customer } from './Customer';
import { CustomerBillingDetails } from './CustomerBillingDetails';
import { CustomerBillingDetailsAddress } from './CustomerBillingDetailsAddress';
import { Fee } from './Fee';
import { InlineObject } from './InlineObject';
import { InlineObject1 } from './InlineObject1';
import { InlineObject2 } from './InlineObject2';
import { InlineObject3 } from './InlineObject3';
import { InlineObject4 } from './InlineObject4';
import { InlineObject5 } from './InlineObject5';
import { InlineResponse200 } from './InlineResponse200';
import { InlineResponse2001 } from './InlineResponse2001';
import { InlineResponse20010 } from './InlineResponse20010';
import { InlineResponse20010Request } from './InlineResponse20010Request';
import { InlineResponse20010RequestBody } from './InlineResponse20010RequestBody';
import { InlineResponse20010RequestHeaders } from './InlineResponse20010RequestHeaders';
import { InlineResponse20010Response } from './InlineResponse20010Response';
import { InlineResponse20010ResponseBody } from './InlineResponse20010ResponseBody';
import { InlineResponse20010ResponseBodyBranding } from './InlineResponse20010ResponseBodyBranding';
import { InlineResponse20011 } from './InlineResponse20011';
import { InlineResponse20011Data } from './InlineResponse20011Data';
import { InlineResponse20012 } from './InlineResponse20012';
import { InlineResponse20013 } from './InlineResponse20013';
import { InlineResponse20013Data } from './InlineResponse20013Data';
import { InlineResponse20014 } from './InlineResponse20014';
import { InlineResponse20015 } from './InlineResponse20015';
import { InlineResponse20016 } from './InlineResponse20016';
import { InlineResponse20017 } from './InlineResponse20017';
import { InlineResponse20017Data } from './InlineResponse20017Data';
import { InlineResponse20018 } from './InlineResponse20018';
import { InlineResponse20019 } from './InlineResponse20019';
import { InlineResponse20019Data } from './InlineResponse20019Data';
import { InlineResponse2002 } from './InlineResponse2002';
import { InlineResponse20020 } from './InlineResponse20020';
import { InlineResponse20021 } from './InlineResponse20021';
import { InlineResponse2003 } from './InlineResponse2003';
import { InlineResponse2003Data } from './InlineResponse2003Data';
import { InlineResponse2004 } from './InlineResponse2004';
import { InlineResponse2005 } from './InlineResponse2005';
import { InlineResponse2006 } from './InlineResponse2006';
import { InlineResponse2006Data } from './InlineResponse2006Data';
import { InlineResponse2007 } from './InlineResponse2007';
import { InlineResponse2008 } from './InlineResponse2008';
import { InlineResponse2009 } from './InlineResponse2009';
import { InlineResponse200BillingDetails } from './InlineResponse200BillingDetails';
import { InlineResponse200BillingDetailsAddress } from './InlineResponse200BillingDetailsAddress';
import { InlineResponse200Data } from './InlineResponse200Data';
import { Invoice   , InvoiceChainEnum   , InvoiceCurrencyEnum      , InvoiceStatusEnum     } from './Invoice';
import { Payment         , PaymentStatusEnum     } from './Payment';
import { Product      , ProductCurrencyEnum    } from './Product';
import { Wallet      , WalletCustomerEnum   } from './Wallet';
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
    "PaymentStatusEnum",
    "ProductCurrencyEnum",
    "WalletCustomerEnum",
]);

let typeMap: {[index: string]: any} = {
    "APIKey": APIKey,
    "Account": Account,
    "AccountBranding": AccountBranding,
    "Customer": Customer,
    "CustomerBillingDetails": CustomerBillingDetails,
    "CustomerBillingDetailsAddress": CustomerBillingDetailsAddress,
    "Fee": Fee,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse20010": InlineResponse20010,
    "InlineResponse20010Request": InlineResponse20010Request,
    "InlineResponse20010RequestBody": InlineResponse20010RequestBody,
    "InlineResponse20010RequestHeaders": InlineResponse20010RequestHeaders,
    "InlineResponse20010Response": InlineResponse20010Response,
    "InlineResponse20010ResponseBody": InlineResponse20010ResponseBody,
    "InlineResponse20010ResponseBodyBranding": InlineResponse20010ResponseBodyBranding,
    "InlineResponse20011": InlineResponse20011,
    "InlineResponse20011Data": InlineResponse20011Data,
    "InlineResponse20012": InlineResponse20012,
    "InlineResponse20013": InlineResponse20013,
    "InlineResponse20013Data": InlineResponse20013Data,
    "InlineResponse20014": InlineResponse20014,
    "InlineResponse20015": InlineResponse20015,
    "InlineResponse20016": InlineResponse20016,
    "InlineResponse20017": InlineResponse20017,
    "InlineResponse20017Data": InlineResponse20017Data,
    "InlineResponse20018": InlineResponse20018,
    "InlineResponse20019": InlineResponse20019,
    "InlineResponse20019Data": InlineResponse20019Data,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse20020": InlineResponse20020,
    "InlineResponse20021": InlineResponse20021,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2003Data": InlineResponse2003Data,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2006Data": InlineResponse2006Data,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse2009": InlineResponse2009,
    "InlineResponse200BillingDetails": InlineResponse200BillingDetails,
    "InlineResponse200BillingDetailsAddress": InlineResponse200BillingDetailsAddress,
    "InlineResponse200Data": InlineResponse200Data,
    "Invoice": Invoice,
    "Payment": Payment,
    "Product": Product,
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
