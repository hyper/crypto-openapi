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
__exportStar(require("./Account"), exports);
__exportStar(require("./AccountAllOf"), exports);
__exportStar(require("./AccountAllOfBusinessProfile"), exports);
__exportStar(require("./AccountAllOfIntegrations"), exports);
__exportStar(require("./AccountAllOfIntegrationsFtx"), exports);
__exportStar(require("./AccountAllOfSettings"), exports);
__exportStar(require("./AccountAllOfSettingsBilling"), exports);
__exportStar(require("./AccountAllOfSettingsBranding"), exports);
__exportStar(require("./AccountAllOfSettingsPayments"), exports);
__exportStar(require("./AccountAllOfTeam"), exports);
__exportStar(require("./Address"), exports);
__exportStar(require("./ApiKey"), exports);
__exportStar(require("./ApiKeyAllOf"), exports);
__exportStar(require("./Checkout"), exports);
__exportStar(require("./CheckoutAllOf"), exports);
__exportStar(require("./CheckoutAllOfCustomerDetails"), exports);
__exportStar(require("./CreateCustomerBody"), exports);
__exportStar(require("./CreateFeeBody"), exports);
__exportStar(require("./CreatePayoutWalletBody"), exports);
__exportStar(require("./CreateProductBody"), exports);
__exportStar(require("./CreateTransferBody"), exports);
__exportStar(require("./CreateWalletBody"), exports);
__exportStar(require("./CreateWebhookBody"), exports);
__exportStar(require("./Customer"), exports);
__exportStar(require("./CustomerAllOf"), exports);
__exportStar(require("./CustomerAllOfBillingDetails"), exports);
__exportStar(require("./CustomersBillingDetails"), exports);
__exportStar(require("./CustomersBillingDetailsAddress"), exports);
__exportStar(require("./CustomersIdBillingDetails"), exports);
__exportStar(require("./CustomersIdBillingDetailsAddress"), exports);
__exportStar(require("./Fee"), exports);
__exportStar(require("./FeeAllOf"), exports);
__exportStar(require("./InlineResponse400"), exports);
__exportStar(require("./InlineResponse400Error"), exports);
__exportStar(require("./Invoice"), exports);
__exportStar(require("./InvoiceAllOf"), exports);
__exportStar(require("./LineItem"), exports);
__exportStar(require("./ListAccountsResponse"), exports);
__exportStar(require("./ListCustomersResponse"), exports);
__exportStar(require("./ListFeesResponse"), exports);
__exportStar(require("./ListInvoicesResponse"), exports);
__exportStar(require("./ListLogsResponse"), exports);
__exportStar(require("./ListPaymentIntentsResponse"), exports);
__exportStar(require("./ListPayoutWalletsResponse"), exports);
__exportStar(require("./ListPricesResponse"), exports);
__exportStar(require("./ListProductsResponse"), exports);
__exportStar(require("./ListSubscriptionsResponse"), exports);
__exportStar(require("./ListTransfersResponse"), exports);
__exportStar(require("./ListWalletsResponse"), exports);
__exportStar(require("./ListWebhooksResponse"), exports);
__exportStar(require("./Log"), exports);
__exportStar(require("./LogAllOf"), exports);
__exportStar(require("./Model"), exports);
__exportStar(require("./Notification"), exports);
__exportStar(require("./NotificationAllOf"), exports);
__exportStar(require("./PaymentIntent"), exports);
__exportStar(require("./PaymentIntentAllOf"), exports);
__exportStar(require("./PaymentLink"), exports);
__exportStar(require("./PaymentLinkAllOf"), exports);
__exportStar(require("./PaymentLinkAllOfAfterCompletion"), exports);
__exportStar(require("./PayoutWallet"), exports);
__exportStar(require("./PayoutWalletAllOf"), exports);
__exportStar(require("./Price"), exports);
__exportStar(require("./PriceAllOf"), exports);
__exportStar(require("./PriceAllOfBasePrice"), exports);
__exportStar(require("./PriceAllOfCustomAmount"), exports);
__exportStar(require("./Product"), exports);
__exportStar(require("./ProductAllOf"), exports);
__exportStar(require("./Subscription"), exports);
__exportStar(require("./SubscriptionAllOf"), exports);
__exportStar(require("./Transfer"), exports);
__exportStar(require("./TransferAllOf"), exports);
__exportStar(require("./UpdateCustomerBody"), exports);
__exportStar(require("./UpdatePaymentIntentBody"), exports);
__exportStar(require("./UpdatePriceBody"), exports);
__exportStar(require("./UpdateProductBody"), exports);
__exportStar(require("./UpdateWalletBody"), exports);
__exportStar(require("./UpdateWebhookBody"), exports);
__exportStar(require("./Wallet"), exports);
__exportStar(require("./WalletAllOf"), exports);
__exportStar(require("./Webhook"), exports);
__exportStar(require("./WebhookAllOf"), exports);
const Account_1 = require("./Account");
const AccountAllOf_1 = require("./AccountAllOf");
const AccountAllOfBusinessProfile_1 = require("./AccountAllOfBusinessProfile");
const AccountAllOfIntegrations_1 = require("./AccountAllOfIntegrations");
const AccountAllOfIntegrationsFtx_1 = require("./AccountAllOfIntegrationsFtx");
const AccountAllOfSettings_1 = require("./AccountAllOfSettings");
const AccountAllOfSettingsBilling_1 = require("./AccountAllOfSettingsBilling");
const AccountAllOfSettingsBranding_1 = require("./AccountAllOfSettingsBranding");
const AccountAllOfSettingsPayments_1 = require("./AccountAllOfSettingsPayments");
const AccountAllOfTeam_1 = require("./AccountAllOfTeam");
const Address_1 = require("./Address");
const ApiKey_1 = require("./ApiKey");
const ApiKeyAllOf_1 = require("./ApiKeyAllOf");
const Checkout_1 = require("./Checkout");
const CheckoutAllOf_1 = require("./CheckoutAllOf");
const CheckoutAllOfCustomerDetails_1 = require("./CheckoutAllOfCustomerDetails");
const CreateCustomerBody_1 = require("./CreateCustomerBody");
const CreateFeeBody_1 = require("./CreateFeeBody");
const CreatePayoutWalletBody_1 = require("./CreatePayoutWalletBody");
const CreateProductBody_1 = require("./CreateProductBody");
const CreateTransferBody_1 = require("./CreateTransferBody");
const CreateWalletBody_1 = require("./CreateWalletBody");
const CreateWebhookBody_1 = require("./CreateWebhookBody");
const Customer_1 = require("./Customer");
const CustomerAllOf_1 = require("./CustomerAllOf");
const CustomerAllOfBillingDetails_1 = require("./CustomerAllOfBillingDetails");
const CustomersBillingDetails_1 = require("./CustomersBillingDetails");
const CustomersBillingDetailsAddress_1 = require("./CustomersBillingDetailsAddress");
const CustomersIdBillingDetails_1 = require("./CustomersIdBillingDetails");
const CustomersIdBillingDetailsAddress_1 = require("./CustomersIdBillingDetailsAddress");
const Fee_1 = require("./Fee");
const FeeAllOf_1 = require("./FeeAllOf");
const InlineResponse400_1 = require("./InlineResponse400");
const InlineResponse400Error_1 = require("./InlineResponse400Error");
const Invoice_1 = require("./Invoice");
const InvoiceAllOf_1 = require("./InvoiceAllOf");
const LineItem_1 = require("./LineItem");
const ListAccountsResponse_1 = require("./ListAccountsResponse");
const ListCustomersResponse_1 = require("./ListCustomersResponse");
const ListFeesResponse_1 = require("./ListFeesResponse");
const ListInvoicesResponse_1 = require("./ListInvoicesResponse");
const ListLogsResponse_1 = require("./ListLogsResponse");
const ListPaymentIntentsResponse_1 = require("./ListPaymentIntentsResponse");
const ListPayoutWalletsResponse_1 = require("./ListPayoutWalletsResponse");
const ListPricesResponse_1 = require("./ListPricesResponse");
const ListProductsResponse_1 = require("./ListProductsResponse");
const ListSubscriptionsResponse_1 = require("./ListSubscriptionsResponse");
const ListTransfersResponse_1 = require("./ListTransfersResponse");
const ListWalletsResponse_1 = require("./ListWalletsResponse");
const ListWebhooksResponse_1 = require("./ListWebhooksResponse");
const Log_1 = require("./Log");
const LogAllOf_1 = require("./LogAllOf");
const Model_1 = require("./Model");
const Notification_1 = require("./Notification");
const NotificationAllOf_1 = require("./NotificationAllOf");
const PaymentIntent_1 = require("./PaymentIntent");
const PaymentIntentAllOf_1 = require("./PaymentIntentAllOf");
const PaymentLink_1 = require("./PaymentLink");
const PaymentLinkAllOf_1 = require("./PaymentLinkAllOf");
const PaymentLinkAllOfAfterCompletion_1 = require("./PaymentLinkAllOfAfterCompletion");
const PayoutWallet_1 = require("./PayoutWallet");
const PayoutWalletAllOf_1 = require("./PayoutWalletAllOf");
const Price_1 = require("./Price");
const PriceAllOf_1 = require("./PriceAllOf");
const PriceAllOfBasePrice_1 = require("./PriceAllOfBasePrice");
const PriceAllOfCustomAmount_1 = require("./PriceAllOfCustomAmount");
const Product_1 = require("./Product");
const ProductAllOf_1 = require("./ProductAllOf");
const Subscription_1 = require("./Subscription");
const SubscriptionAllOf_1 = require("./SubscriptionAllOf");
const Transfer_1 = require("./Transfer");
const TransferAllOf_1 = require("./TransferAllOf");
const UpdateCustomerBody_1 = require("./UpdateCustomerBody");
const UpdatePaymentIntentBody_1 = require("./UpdatePaymentIntentBody");
const UpdatePriceBody_1 = require("./UpdatePriceBody");
const UpdateProductBody_1 = require("./UpdateProductBody");
const UpdateWalletBody_1 = require("./UpdateWalletBody");
const UpdateWebhookBody_1 = require("./UpdateWebhookBody");
const Wallet_1 = require("./Wallet");
const WalletAllOf_1 = require("./WalletAllOf");
const Webhook_1 = require("./Webhook");
const WebhookAllOf_1 = require("./WebhookAllOf");
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
    "ApiKeyKeyEnum",
    "ApiKeyTypeEnum",
    "ApiKeyAllOfKeyEnum",
    "ApiKeyAllOfTypeEnum",
    "CheckoutStatusEnum",
    "CheckoutAllOfStatusEnum",
    "InvoiceStatusEnum",
    "InvoiceAllOfStatusEnum",
    "LogMethodEnum",
    "LogAllOfMethodEnum",
    "NotificationTypeEnum",
    "NotificationAllOfTypeEnum",
    "PaymentIntentStatusEnum",
    "PaymentIntentChainEnum",
    "PaymentIntentCurrencyEnum",
    "PaymentIntentAllOfStatusEnum",
    "PaymentIntentAllOfChainEnum",
    "PaymentIntentAllOfCurrencyEnum",
    "PaymentLinkCurrencyEnum",
    "PaymentLinkChainEnum",
    "PaymentLinkAllOfCurrencyEnum",
    "PaymentLinkAllOfChainEnum",
    "PayoutWalletChainEnum",
    "PayoutWalletTypeEnum",
    "PayoutWalletAllOfChainEnum",
    "PayoutWalletAllOfTypeEnum",
    "SubscriptionStatusEnum",
    "SubscriptionAllOfStatusEnum",
    "WalletChainEnum",
    "WalletAllOfChainEnum",
]);
let typeMap = {
    "Account": Account_1.Account,
    "AccountAllOf": AccountAllOf_1.AccountAllOf,
    "AccountAllOfBusinessProfile": AccountAllOfBusinessProfile_1.AccountAllOfBusinessProfile,
    "AccountAllOfIntegrations": AccountAllOfIntegrations_1.AccountAllOfIntegrations,
    "AccountAllOfIntegrationsFtx": AccountAllOfIntegrationsFtx_1.AccountAllOfIntegrationsFtx,
    "AccountAllOfSettings": AccountAllOfSettings_1.AccountAllOfSettings,
    "AccountAllOfSettingsBilling": AccountAllOfSettingsBilling_1.AccountAllOfSettingsBilling,
    "AccountAllOfSettingsBranding": AccountAllOfSettingsBranding_1.AccountAllOfSettingsBranding,
    "AccountAllOfSettingsPayments": AccountAllOfSettingsPayments_1.AccountAllOfSettingsPayments,
    "AccountAllOfTeam": AccountAllOfTeam_1.AccountAllOfTeam,
    "Address": Address_1.Address,
    "ApiKey": ApiKey_1.ApiKey,
    "ApiKeyAllOf": ApiKeyAllOf_1.ApiKeyAllOf,
    "Checkout": Checkout_1.Checkout,
    "CheckoutAllOf": CheckoutAllOf_1.CheckoutAllOf,
    "CheckoutAllOfCustomerDetails": CheckoutAllOfCustomerDetails_1.CheckoutAllOfCustomerDetails,
    "CreateCustomerBody": CreateCustomerBody_1.CreateCustomerBody,
    "CreateFeeBody": CreateFeeBody_1.CreateFeeBody,
    "CreatePayoutWalletBody": CreatePayoutWalletBody_1.CreatePayoutWalletBody,
    "CreateProductBody": CreateProductBody_1.CreateProductBody,
    "CreateTransferBody": CreateTransferBody_1.CreateTransferBody,
    "CreateWalletBody": CreateWalletBody_1.CreateWalletBody,
    "CreateWebhookBody": CreateWebhookBody_1.CreateWebhookBody,
    "Customer": Customer_1.Customer,
    "CustomerAllOf": CustomerAllOf_1.CustomerAllOf,
    "CustomerAllOfBillingDetails": CustomerAllOfBillingDetails_1.CustomerAllOfBillingDetails,
    "CustomersBillingDetails": CustomersBillingDetails_1.CustomersBillingDetails,
    "CustomersBillingDetailsAddress": CustomersBillingDetailsAddress_1.CustomersBillingDetailsAddress,
    "CustomersIdBillingDetails": CustomersIdBillingDetails_1.CustomersIdBillingDetails,
    "CustomersIdBillingDetailsAddress": CustomersIdBillingDetailsAddress_1.CustomersIdBillingDetailsAddress,
    "Fee": Fee_1.Fee,
    "FeeAllOf": FeeAllOf_1.FeeAllOf,
    "InlineResponse400": InlineResponse400_1.InlineResponse400,
    "InlineResponse400Error": InlineResponse400Error_1.InlineResponse400Error,
    "Invoice": Invoice_1.Invoice,
    "InvoiceAllOf": InvoiceAllOf_1.InvoiceAllOf,
    "LineItem": LineItem_1.LineItem,
    "ListAccountsResponse": ListAccountsResponse_1.ListAccountsResponse,
    "ListCustomersResponse": ListCustomersResponse_1.ListCustomersResponse,
    "ListFeesResponse": ListFeesResponse_1.ListFeesResponse,
    "ListInvoicesResponse": ListInvoicesResponse_1.ListInvoicesResponse,
    "ListLogsResponse": ListLogsResponse_1.ListLogsResponse,
    "ListPaymentIntentsResponse": ListPaymentIntentsResponse_1.ListPaymentIntentsResponse,
    "ListPayoutWalletsResponse": ListPayoutWalletsResponse_1.ListPayoutWalletsResponse,
    "ListPricesResponse": ListPricesResponse_1.ListPricesResponse,
    "ListProductsResponse": ListProductsResponse_1.ListProductsResponse,
    "ListSubscriptionsResponse": ListSubscriptionsResponse_1.ListSubscriptionsResponse,
    "ListTransfersResponse": ListTransfersResponse_1.ListTransfersResponse,
    "ListWalletsResponse": ListWalletsResponse_1.ListWalletsResponse,
    "ListWebhooksResponse": ListWebhooksResponse_1.ListWebhooksResponse,
    "Log": Log_1.Log,
    "LogAllOf": LogAllOf_1.LogAllOf,
    "Model": Model_1.Model,
    "Notification": Notification_1.Notification,
    "NotificationAllOf": NotificationAllOf_1.NotificationAllOf,
    "PaymentIntent": PaymentIntent_1.PaymentIntent,
    "PaymentIntentAllOf": PaymentIntentAllOf_1.PaymentIntentAllOf,
    "PaymentLink": PaymentLink_1.PaymentLink,
    "PaymentLinkAllOf": PaymentLinkAllOf_1.PaymentLinkAllOf,
    "PaymentLinkAllOfAfterCompletion": PaymentLinkAllOfAfterCompletion_1.PaymentLinkAllOfAfterCompletion,
    "PayoutWallet": PayoutWallet_1.PayoutWallet,
    "PayoutWalletAllOf": PayoutWalletAllOf_1.PayoutWalletAllOf,
    "Price": Price_1.Price,
    "PriceAllOf": PriceAllOf_1.PriceAllOf,
    "PriceAllOfBasePrice": PriceAllOfBasePrice_1.PriceAllOfBasePrice,
    "PriceAllOfCustomAmount": PriceAllOfCustomAmount_1.PriceAllOfCustomAmount,
    "Product": Product_1.Product,
    "ProductAllOf": ProductAllOf_1.ProductAllOf,
    "Subscription": Subscription_1.Subscription,
    "SubscriptionAllOf": SubscriptionAllOf_1.SubscriptionAllOf,
    "Transfer": Transfer_1.Transfer,
    "TransferAllOf": TransferAllOf_1.TransferAllOf,
    "UpdateCustomerBody": UpdateCustomerBody_1.UpdateCustomerBody,
    "UpdatePaymentIntentBody": UpdatePaymentIntentBody_1.UpdatePaymentIntentBody,
    "UpdatePriceBody": UpdatePriceBody_1.UpdatePriceBody,
    "UpdateProductBody": UpdateProductBody_1.UpdateProductBody,
    "UpdateWalletBody": UpdateWalletBody_1.UpdateWalletBody,
    "UpdateWebhookBody": UpdateWebhookBody_1.UpdateWebhookBody,
    "Wallet": Wallet_1.Wallet,
    "WalletAllOf": WalletAllOf_1.WalletAllOf,
    "Webhook": Webhook_1.Webhook,
    "WebhookAllOf": WebhookAllOf_1.WebhookAllOf,
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