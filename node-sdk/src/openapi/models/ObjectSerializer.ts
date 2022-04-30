export * from './Account';
export * from './AccountAllOf';
export * from './AccountAllOfBranding';
export * from './AccountsBranding';
export * from './ApiKey';
export * from './ApiKeyAllOf';
export * from './CreateAccountBody';
export * from './CreateCustomerBody';
export * from './CreateFeeBody';
export * from './CreateInvoiceBody';
export * from './CreatePayoutWalletBody';
export * from './CreateProductBody';
export * from './CreateTransferBody';
export * from './CreateWalletBody';
export * from './CreateWebhookBody';
export * from './Customer';
export * from './CustomerAllOf';
export * from './CustomersBillingDetails';
export * from './CustomersBillingDetailsAddress';
export * from './CustomersIdBillingDetails';
export * from './CustomersIdBillingDetailsAddress';
export * from './Fee';
export * from './FeeAllOf';
export * from './Invoice';
export * from './InvoiceAllOf';
export * from './ListAccountsResponse';
export * from './ListCustomersResponse';
export * from './ListFeesResponse';
export * from './ListInvoicesResponse';
export * from './ListLogsResponse';
export * from './ListPaymentsResponse';
export * from './ListPayoutWalletsResponse';
export * from './ListProductsResponse';
export * from './ListTransfersResponse';
export * from './ListWalletsResponse';
export * from './ListWebhooksResponse';
export * from './Log';
export * from './LogAllOf';
export * from './Model';
export * from './Payment';
export * from './PaymentAllOf';
export * from './PayoutWallet';
export * from './PayoutWalletAllOf';
export * from './Product';
export * from './ProductAllOf';
export * from './Transaction';
export * from './TransactionAllOf';
export * from './Transfer';
export * from './TransferAllOf';
export * from './UpdateAccountBody';
export * from './UpdateCustomerBody';
export * from './UpdateInvoiceBody';
export * from './UpdatePayoutWalletBody';
export * from './UpdateProductBody';
export * from './UpdateWalletBody';
export * from './UpdateWebhookBody';
export * from './Wallet';
export * from './WalletAllOf';
export * from './Webhook';
export * from './WebhookAllOf';

import { Account } from './Account';
import { AccountAllOf } from './AccountAllOf';
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { AccountsBranding } from './AccountsBranding';
import { ApiKey       , ApiKeyTypeEnum   } from './ApiKey';
import { ApiKeyAllOf   , ApiKeyAllOfTypeEnum   } from './ApiKeyAllOf';
import { CreateAccountBody } from './CreateAccountBody';
import { CreateCustomerBody } from './CreateCustomerBody';
import { CreateFeeBody } from './CreateFeeBody';
import { CreateInvoiceBody } from './CreateInvoiceBody';
import { CreatePayoutWalletBody } from './CreatePayoutWalletBody';
import { CreateProductBody } from './CreateProductBody';
import { CreateTransferBody } from './CreateTransferBody';
import { CreateWalletBody } from './CreateWalletBody';
import { CreateWebhookBody } from './CreateWebhookBody';
import { Customer } from './Customer';
import { CustomerAllOf } from './CustomerAllOf';
import { CustomersBillingDetails } from './CustomersBillingDetails';
import { CustomersBillingDetailsAddress } from './CustomersBillingDetailsAddress';
import { CustomersIdBillingDetails } from './CustomersIdBillingDetails';
import { CustomersIdBillingDetailsAddress } from './CustomersIdBillingDetailsAddress';
import { Fee } from './Fee';
import { FeeAllOf } from './FeeAllOf';
import { Invoice      , InvoiceChainEnum  , InvoiceCurrencyEnum        , InvoiceStatusEnum      } from './Invoice';
import { InvoiceAllOf  , InvoiceAllOfChainEnum  , InvoiceAllOfCurrencyEnum        , InvoiceAllOfStatusEnum      } from './InvoiceAllOf';
import { ListAccountsResponse } from './ListAccountsResponse';
import { ListCustomersResponse } from './ListCustomersResponse';
import { ListFeesResponse } from './ListFeesResponse';
import { ListInvoicesResponse } from './ListInvoicesResponse';
import { ListLogsResponse } from './ListLogsResponse';
import { ListPaymentsResponse } from './ListPaymentsResponse';
import { ListPayoutWalletsResponse } from './ListPayoutWalletsResponse';
import { ListProductsResponse } from './ListProductsResponse';
import { ListTransfersResponse } from './ListTransfersResponse';
import { ListWalletsResponse } from './ListWalletsResponse';
import { ListWebhooksResponse } from './ListWebhooksResponse';
import { Log        , LogMethodEnum       } from './Log';
import { LogAllOf     , LogAllOfMethodEnum       } from './LogAllOf';
import { Model } from './Model';
import { Payment           , PaymentStatusEnum     } from './Payment';
import { PaymentAllOf       , PaymentAllOfStatusEnum     } from './PaymentAllOf';
import { PayoutWallet       , PayoutWalletChainEnum   } from './PayoutWallet';
import { PayoutWalletAllOf   , PayoutWalletAllOfChainEnum   } from './PayoutWalletAllOf';
import { Product        , ProductCurrencyEnum    } from './Product';
import { ProductAllOf    , ProductAllOfCurrencyEnum    } from './ProductAllOf';
import { Transaction  , TransactionChainEnum  , TransactionCurrencyEnum      , TransactionStatusEnum        } from './Transaction';
import { TransactionAllOf  , TransactionAllOfChainEnum  , TransactionAllOfCurrencyEnum      , TransactionAllOfStatusEnum    } from './TransactionAllOf';
import { Transfer } from './Transfer';
import { TransferAllOf } from './TransferAllOf';
import { UpdateAccountBody } from './UpdateAccountBody';
import { UpdateCustomerBody } from './UpdateCustomerBody';
import { UpdateInvoiceBody } from './UpdateInvoiceBody';
import { UpdatePayoutWalletBody } from './UpdatePayoutWalletBody';
import { UpdateProductBody } from './UpdateProductBody';
import { UpdateWalletBody } from './UpdateWalletBody';
import { UpdateWebhookBody } from './UpdateWebhookBody';
import { Wallet       , WalletChainEnum    } from './Wallet';
import { WalletAllOf   , WalletAllOfChainEnum    } from './WalletAllOf';
import { Webhook } from './Webhook';
import { WebhookAllOf } from './WebhookAllOf';

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
    "ApiKeyTypeEnum",
    "ApiKeyAllOfTypeEnum",
    "InvoiceChainEnum",
    "InvoiceCurrencyEnum",
    "InvoiceStatusEnum",
    "InvoiceAllOfChainEnum",
    "InvoiceAllOfCurrencyEnum",
    "InvoiceAllOfStatusEnum",
    "LogMethodEnum",
    "LogAllOfMethodEnum",
    "PaymentStatusEnum",
    "PaymentAllOfStatusEnum",
    "PayoutWalletChainEnum",
    "PayoutWalletAllOfChainEnum",
    "ProductCurrencyEnum",
    "ProductAllOfCurrencyEnum",
    "TransactionChainEnum",
    "TransactionCurrencyEnum",
    "TransactionStatusEnum",
    "TransactionAllOfChainEnum",
    "TransactionAllOfCurrencyEnum",
    "TransactionAllOfStatusEnum",
    "WalletChainEnum",
    "WalletAllOfChainEnum",
]);

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountAllOf": AccountAllOf,
    "AccountAllOfBranding": AccountAllOfBranding,
    "AccountsBranding": AccountsBranding,
    "ApiKey": ApiKey,
    "ApiKeyAllOf": ApiKeyAllOf,
    "CreateAccountBody": CreateAccountBody,
    "CreateCustomerBody": CreateCustomerBody,
    "CreateFeeBody": CreateFeeBody,
    "CreateInvoiceBody": CreateInvoiceBody,
    "CreatePayoutWalletBody": CreatePayoutWalletBody,
    "CreateProductBody": CreateProductBody,
    "CreateTransferBody": CreateTransferBody,
    "CreateWalletBody": CreateWalletBody,
    "CreateWebhookBody": CreateWebhookBody,
    "Customer": Customer,
    "CustomerAllOf": CustomerAllOf,
    "CustomersBillingDetails": CustomersBillingDetails,
    "CustomersBillingDetailsAddress": CustomersBillingDetailsAddress,
    "CustomersIdBillingDetails": CustomersIdBillingDetails,
    "CustomersIdBillingDetailsAddress": CustomersIdBillingDetailsAddress,
    "Fee": Fee,
    "FeeAllOf": FeeAllOf,
    "Invoice": Invoice,
    "InvoiceAllOf": InvoiceAllOf,
    "ListAccountsResponse": ListAccountsResponse,
    "ListCustomersResponse": ListCustomersResponse,
    "ListFeesResponse": ListFeesResponse,
    "ListInvoicesResponse": ListInvoicesResponse,
    "ListLogsResponse": ListLogsResponse,
    "ListPaymentsResponse": ListPaymentsResponse,
    "ListPayoutWalletsResponse": ListPayoutWalletsResponse,
    "ListProductsResponse": ListProductsResponse,
    "ListTransfersResponse": ListTransfersResponse,
    "ListWalletsResponse": ListWalletsResponse,
    "ListWebhooksResponse": ListWebhooksResponse,
    "Log": Log,
    "LogAllOf": LogAllOf,
    "Model": Model,
    "Payment": Payment,
    "PaymentAllOf": PaymentAllOf,
    "PayoutWallet": PayoutWallet,
    "PayoutWalletAllOf": PayoutWalletAllOf,
    "Product": Product,
    "ProductAllOf": ProductAllOf,
    "Transaction": Transaction,
    "TransactionAllOf": TransactionAllOf,
    "Transfer": Transfer,
    "TransferAllOf": TransferAllOf,
    "UpdateAccountBody": UpdateAccountBody,
    "UpdateCustomerBody": UpdateCustomerBody,
    "UpdateInvoiceBody": UpdateInvoiceBody,
    "UpdatePayoutWalletBody": UpdatePayoutWalletBody,
    "UpdateProductBody": UpdateProductBody,
    "UpdateWalletBody": UpdateWalletBody,
    "UpdateWebhookBody": UpdateWebhookBody,
    "Wallet": Wallet,
    "WalletAllOf": WalletAllOf,
    "Webhook": Webhook,
    "WebhookAllOf": WebhookAllOf,
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
