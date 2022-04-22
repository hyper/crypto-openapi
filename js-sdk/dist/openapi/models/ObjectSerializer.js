"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./APIKey"), exports);
__exportStar(require("./Account"), exports);
__exportStar(require("./AccountBranding"), exports);
__exportStar(require("./Customer"), exports);
__exportStar(require("./CustomerBillingDetails"), exports);
__exportStar(require("./CustomerBillingDetailsAddress"), exports);
__exportStar(require("./Fee"), exports);
__exportStar(require("./InlineObject"), exports);
__exportStar(require("./InlineObject1"), exports);
__exportStar(require("./InlineObject2"), exports);
__exportStar(require("./InlineObject3"), exports);
__exportStar(require("./InlineObject4"), exports);
__exportStar(require("./InlineObject5"), exports);
__exportStar(require("./InlineResponse200"), exports);
__exportStar(require("./InlineResponse2001"), exports);
__exportStar(require("./InlineResponse20010"), exports);
__exportStar(require("./InlineResponse20010Request"), exports);
__exportStar(require("./InlineResponse20010RequestBody"), exports);
__exportStar(require("./InlineResponse20010RequestHeaders"), exports);
__exportStar(require("./InlineResponse20010Response"), exports);
__exportStar(require("./InlineResponse20010ResponseBody"), exports);
__exportStar(require("./InlineResponse20010ResponseBodyBranding"), exports);
__exportStar(require("./InlineResponse20011"), exports);
__exportStar(require("./InlineResponse20011Data"), exports);
__exportStar(require("./InlineResponse20012"), exports);
__exportStar(require("./InlineResponse20013"), exports);
__exportStar(require("./InlineResponse20013Data"), exports);
__exportStar(require("./InlineResponse20014"), exports);
__exportStar(require("./InlineResponse20015"), exports);
__exportStar(require("./InlineResponse20016"), exports);
__exportStar(require("./InlineResponse20017"), exports);
__exportStar(require("./InlineResponse20017Data"), exports);
__exportStar(require("./InlineResponse20018"), exports);
__exportStar(require("./InlineResponse20019"), exports);
__exportStar(require("./InlineResponse20019Data"), exports);
__exportStar(require("./InlineResponse2002"), exports);
__exportStar(require("./InlineResponse20020"), exports);
__exportStar(require("./InlineResponse20021"), exports);
__exportStar(require("./InlineResponse2003"), exports);
__exportStar(require("./InlineResponse2003Data"), exports);
__exportStar(require("./InlineResponse2004"), exports);
__exportStar(require("./InlineResponse2005"), exports);
__exportStar(require("./InlineResponse2006"), exports);
__exportStar(require("./InlineResponse2006Data"), exports);
__exportStar(require("./InlineResponse2007"), exports);
__exportStar(require("./InlineResponse2008"), exports);
__exportStar(require("./InlineResponse2009"), exports);
__exportStar(require("./InlineResponse200BillingDetails"), exports);
__exportStar(require("./InlineResponse200BillingDetailsAddress"), exports);
__exportStar(require("./InlineResponse200Data"), exports);
__exportStar(require("./Invoice"), exports);
__exportStar(require("./Payment"), exports);
__exportStar(require("./Product"), exports);
__exportStar(require("./Wallet"), exports);
__exportStar(require("./Webhook"), exports);
const APIKey_1 = require("./APIKey");
const Account_1 = require("./Account");
const AccountBranding_1 = require("./AccountBranding");
const Customer_1 = require("./Customer");
const CustomerBillingDetails_1 = require("./CustomerBillingDetails");
const CustomerBillingDetailsAddress_1 = require("./CustomerBillingDetailsAddress");
const Fee_1 = require("./Fee");
const InlineObject_1 = require("./InlineObject");
const InlineObject1_1 = require("./InlineObject1");
const InlineObject2_1 = require("./InlineObject2");
const InlineObject3_1 = require("./InlineObject3");
const InlineObject4_1 = require("./InlineObject4");
const InlineObject5_1 = require("./InlineObject5");
const InlineResponse200_1 = require("./InlineResponse200");
const InlineResponse2001_1 = require("./InlineResponse2001");
const InlineResponse20010_1 = require("./InlineResponse20010");
const InlineResponse20010Request_1 = require("./InlineResponse20010Request");
const InlineResponse20010RequestBody_1 = require("./InlineResponse20010RequestBody");
const InlineResponse20010RequestHeaders_1 = require("./InlineResponse20010RequestHeaders");
const InlineResponse20010Response_1 = require("./InlineResponse20010Response");
const InlineResponse20010ResponseBody_1 = require("./InlineResponse20010ResponseBody");
const InlineResponse20010ResponseBodyBranding_1 = require("./InlineResponse20010ResponseBodyBranding");
const InlineResponse20011_1 = require("./InlineResponse20011");
const InlineResponse20011Data_1 = require("./InlineResponse20011Data");
const InlineResponse20012_1 = require("./InlineResponse20012");
const InlineResponse20013_1 = require("./InlineResponse20013");
const InlineResponse20013Data_1 = require("./InlineResponse20013Data");
const InlineResponse20014_1 = require("./InlineResponse20014");
const InlineResponse20015_1 = require("./InlineResponse20015");
const InlineResponse20016_1 = require("./InlineResponse20016");
const InlineResponse20017_1 = require("./InlineResponse20017");
const InlineResponse20017Data_1 = require("./InlineResponse20017Data");
const InlineResponse20018_1 = require("./InlineResponse20018");
const InlineResponse20019_1 = require("./InlineResponse20019");
const InlineResponse20019Data_1 = require("./InlineResponse20019Data");
const InlineResponse2002_1 = require("./InlineResponse2002");
const InlineResponse20020_1 = require("./InlineResponse20020");
const InlineResponse20021_1 = require("./InlineResponse20021");
const InlineResponse2003_1 = require("./InlineResponse2003");
const InlineResponse2003Data_1 = require("./InlineResponse2003Data");
const InlineResponse2004_1 = require("./InlineResponse2004");
const InlineResponse2005_1 = require("./InlineResponse2005");
const InlineResponse2006_1 = require("./InlineResponse2006");
const InlineResponse2006Data_1 = require("./InlineResponse2006Data");
const InlineResponse2007_1 = require("./InlineResponse2007");
const InlineResponse2008_1 = require("./InlineResponse2008");
const InlineResponse2009_1 = require("./InlineResponse2009");
const InlineResponse200BillingDetails_1 = require("./InlineResponse200BillingDetails");
const InlineResponse200BillingDetailsAddress_1 = require("./InlineResponse200BillingDetailsAddress");
const InlineResponse200Data_1 = require("./InlineResponse200Data");
const Invoice_1 = require("./Invoice");
const Payment_1 = require("./Payment");
const Product_1 = require("./Product");
const Wallet_1 = require("./Wallet");
const Webhook_1 = require("./Webhook");
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
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let enumsMap = new Set([
    "APIKeyTypeEnum",
    "InvoiceChainEnum",
    "InvoiceCurrencyEnum",
    "InvoiceStatusEnum",
    "PaymentStatusEnum",
    "ProductCurrencyEnum",
    "WalletCustomerEnum",
]);
let typeMap = {
    "APIKey": APIKey_1.APIKey,
    "Account": Account_1.Account,
    "AccountBranding": AccountBranding_1.AccountBranding,
    "Customer": Customer_1.Customer,
    "CustomerBillingDetails": CustomerBillingDetails_1.CustomerBillingDetails,
    "CustomerBillingDetailsAddress": CustomerBillingDetailsAddress_1.CustomerBillingDetailsAddress,
    "Fee": Fee_1.Fee,
    "InlineObject": InlineObject_1.InlineObject,
    "InlineObject1": InlineObject1_1.InlineObject1,
    "InlineObject2": InlineObject2_1.InlineObject2,
    "InlineObject3": InlineObject3_1.InlineObject3,
    "InlineObject4": InlineObject4_1.InlineObject4,
    "InlineObject5": InlineObject5_1.InlineObject5,
    "InlineResponse200": InlineResponse200_1.InlineResponse200,
    "InlineResponse2001": InlineResponse2001_1.InlineResponse2001,
    "InlineResponse20010": InlineResponse20010_1.InlineResponse20010,
    "InlineResponse20010Request": InlineResponse20010Request_1.InlineResponse20010Request,
    "InlineResponse20010RequestBody": InlineResponse20010RequestBody_1.InlineResponse20010RequestBody,
    "InlineResponse20010RequestHeaders": InlineResponse20010RequestHeaders_1.InlineResponse20010RequestHeaders,
    "InlineResponse20010Response": InlineResponse20010Response_1.InlineResponse20010Response,
    "InlineResponse20010ResponseBody": InlineResponse20010ResponseBody_1.InlineResponse20010ResponseBody,
    "InlineResponse20010ResponseBodyBranding": InlineResponse20010ResponseBodyBranding_1.InlineResponse20010ResponseBodyBranding,
    "InlineResponse20011": InlineResponse20011_1.InlineResponse20011,
    "InlineResponse20011Data": InlineResponse20011Data_1.InlineResponse20011Data,
    "InlineResponse20012": InlineResponse20012_1.InlineResponse20012,
    "InlineResponse20013": InlineResponse20013_1.InlineResponse20013,
    "InlineResponse20013Data": InlineResponse20013Data_1.InlineResponse20013Data,
    "InlineResponse20014": InlineResponse20014_1.InlineResponse20014,
    "InlineResponse20015": InlineResponse20015_1.InlineResponse20015,
    "InlineResponse20016": InlineResponse20016_1.InlineResponse20016,
    "InlineResponse20017": InlineResponse20017_1.InlineResponse20017,
    "InlineResponse20017Data": InlineResponse20017Data_1.InlineResponse20017Data,
    "InlineResponse20018": InlineResponse20018_1.InlineResponse20018,
    "InlineResponse20019": InlineResponse20019_1.InlineResponse20019,
    "InlineResponse20019Data": InlineResponse20019Data_1.InlineResponse20019Data,
    "InlineResponse2002": InlineResponse2002_1.InlineResponse2002,
    "InlineResponse20020": InlineResponse20020_1.InlineResponse20020,
    "InlineResponse20021": InlineResponse20021_1.InlineResponse20021,
    "InlineResponse2003": InlineResponse2003_1.InlineResponse2003,
    "InlineResponse2003Data": InlineResponse2003Data_1.InlineResponse2003Data,
    "InlineResponse2004": InlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": InlineResponse2005_1.InlineResponse2005,
    "InlineResponse2006": InlineResponse2006_1.InlineResponse2006,
    "InlineResponse2006Data": InlineResponse2006Data_1.InlineResponse2006Data,
    "InlineResponse2007": InlineResponse2007_1.InlineResponse2007,
    "InlineResponse2008": InlineResponse2008_1.InlineResponse2008,
    "InlineResponse2009": InlineResponse2009_1.InlineResponse2009,
    "InlineResponse200BillingDetails": InlineResponse200BillingDetails_1.InlineResponse200BillingDetails,
    "InlineResponse200BillingDetailsAddress": InlineResponse200BillingDetailsAddress_1.InlineResponse200BillingDetailsAddress,
    "InlineResponse200Data": InlineResponse200Data_1.InlineResponse200Data,
    "Invoice": Invoice_1.Invoice,
    "Payment": Payment_1.Payment,
    "Product": Product_1.Product,
    "Wallet": Wallet_1.Wallet,
    "Webhook": Webhook_1.Webhook,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
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
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    static stringify(data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map