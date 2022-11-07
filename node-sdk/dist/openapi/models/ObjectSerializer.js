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
__exportStar(require("./AccountConnectRequest"), exports);
__exportStar(require("./AccountCreateRequest"), exports);
__exportStar(require("./AccountDashboardAccessRequest"), exports);
__exportStar(require("./AccountListResponse"), exports);
__exportStar(require("./AccountUpdateRequest"), exports);
__exportStar(require("./Address"), exports);
__exportStar(require("./AfterCompletion"), exports);
__exportStar(require("./ApiKeyCreateRequest"), exports);
__exportStar(require("./ApiKeyListResponse"), exports);
__exportStar(require("./ApiKeyType"), exports);
__exportStar(require("./BasePrice"), exports);
__exportStar(require("./Chain"), exports);
__exportStar(require("./CheckoutCreateRequest"), exports);
__exportStar(require("./CheckoutListResponse"), exports);
__exportStar(require("./CheckoutStatus"), exports);
__exportStar(require("./CouponCreateRequest"), exports);
__exportStar(require("./CouponDuration"), exports);
__exportStar(require("./CouponListResponse"), exports);
__exportStar(require("./CouponUpdateRequest"), exports);
__exportStar(require("./Currency"), exports);
__exportStar(require("./CustomAmount"), exports);
__exportStar(require("./CustomerCreateRequest"), exports);
__exportStar(require("./CustomerCreateRequestBillingDetails"), exports);
__exportStar(require("./CustomerDetails"), exports);
__exportStar(require("./CustomerListResponse"), exports);
__exportStar(require("./CustomerUpdateRequest"), exports);
__exportStar(require("./EventType"), exports);
__exportStar(require("./FeeCreateRequest"), exports);
__exportStar(require("./FeeListResponse"), exports);
__exportStar(require("./Headers"), exports);
__exportStar(require("./IAccount"), exports);
__exportStar(require("./IApiKey"), exports);
__exportStar(require("./IBilling"), exports);
__exportStar(require("./IBranding"), exports);
__exportStar(require("./IBusinessProfile"), exports);
__exportStar(require("./ICheckout"), exports);
__exportStar(require("./ICoupon"), exports);
__exportStar(require("./ICustomer"), exports);
__exportStar(require("./IFee"), exports);
__exportStar(require("./IIntegrations"), exports);
__exportStar(require("./IIntegrationsFtx"), exports);
__exportStar(require("./IInvoice"), exports);
__exportStar(require("./ILog"), exports);
__exportStar(require("./IPaymentIntent"), exports);
__exportStar(require("./IPaymentLink"), exports);
__exportStar(require("./IPayments"), exports);
__exportStar(require("./IPayoutWallet"), exports);
__exportStar(require("./IPrice"), exports);
__exportStar(require("./IProduct"), exports);
__exportStar(require("./IRequest"), exports);
__exportStar(require("./IResponse"), exports);
__exportStar(require("./ISettings"), exports);
__exportStar(require("./ISubscription"), exports);
__exportStar(require("./ITeamMember"), exports);
__exportStar(require("./ITransfer"), exports);
__exportStar(require("./IWallet"), exports);
__exportStar(require("./IWebhook"), exports);
__exportStar(require("./InvoiceCreateRequest"), exports);
__exportStar(require("./InvoiceListResponse"), exports);
__exportStar(require("./InvoicePayRequest"), exports);
__exportStar(require("./InvoiceStatus"), exports);
__exportStar(require("./InvoiceUpdateRequest"), exports);
__exportStar(require("./LineItem"), exports);
__exportStar(require("./LogListResponse"), exports);
__exportStar(require("./PaymentIntentCreateRequest"), exports);
__exportStar(require("./PaymentIntentListResponse"), exports);
__exportStar(require("./PaymentIntentStatus"), exports);
__exportStar(require("./PaymentIntentUpdateRequest"), exports);
__exportStar(require("./PaymentLinkCreateRequest"), exports);
__exportStar(require("./PaymentLinkListResponse"), exports);
__exportStar(require("./PaymentLinkUpdateRequest"), exports);
__exportStar(require("./PayoutWallet"), exports);
__exportStar(require("./PayoutWalletCreateRequest"), exports);
__exportStar(require("./PayoutWalletListResponse"), exports);
__exportStar(require("./PayoutWalletUpdateRequest"), exports);
__exportStar(require("./PriceCreateRequest"), exports);
__exportStar(require("./PriceListResponse"), exports);
__exportStar(require("./PriceUpdateRequest"), exports);
__exportStar(require("./ProductCreateRequest"), exports);
__exportStar(require("./ProductListResponse"), exports);
__exportStar(require("./ProductUpdateRequest"), exports);
__exportStar(require("./SubscriptionCreateRequest"), exports);
__exportStar(require("./SubscriptionListResponse"), exports);
__exportStar(require("./SubscriptionStatus"), exports);
__exportStar(require("./SubscriptionUpdateRequest"), exports);
__exportStar(require("./TransferCreateRequest"), exports);
__exportStar(require("./TransferListResponse"), exports);
__exportStar(require("./WalletCreateRequest"), exports);
__exportStar(require("./WalletListResponse"), exports);
__exportStar(require("./WalletUpdateRequest"), exports);
__exportStar(require("./WebhookCreateRequest"), exports);
__exportStar(require("./WebhookListResponse"), exports);
__exportStar(require("./WebhookUpdateRequest"), exports);
const AccountConnectRequest_1 = require("./AccountConnectRequest");
const AccountCreateRequest_1 = require("./AccountCreateRequest");
const AccountDashboardAccessRequest_1 = require("./AccountDashboardAccessRequest");
const AccountListResponse_1 = require("./AccountListResponse");
const AccountUpdateRequest_1 = require("./AccountUpdateRequest");
const Address_1 = require("./Address");
const AfterCompletion_1 = require("./AfterCompletion");
const ApiKeyCreateRequest_1 = require("./ApiKeyCreateRequest");
const ApiKeyListResponse_1 = require("./ApiKeyListResponse");
const BasePrice_1 = require("./BasePrice");
const CheckoutCreateRequest_1 = require("./CheckoutCreateRequest");
const CheckoutListResponse_1 = require("./CheckoutListResponse");
const CouponCreateRequest_1 = require("./CouponCreateRequest");
const CouponListResponse_1 = require("./CouponListResponse");
const CouponUpdateRequest_1 = require("./CouponUpdateRequest");
const CustomAmount_1 = require("./CustomAmount");
const CustomerCreateRequest_1 = require("./CustomerCreateRequest");
const CustomerCreateRequestBillingDetails_1 = require("./CustomerCreateRequestBillingDetails");
const CustomerDetails_1 = require("./CustomerDetails");
const CustomerListResponse_1 = require("./CustomerListResponse");
const CustomerUpdateRequest_1 = require("./CustomerUpdateRequest");
const FeeCreateRequest_1 = require("./FeeCreateRequest");
const FeeListResponse_1 = require("./FeeListResponse");
const Headers_1 = require("./Headers");
const IAccount_1 = require("./IAccount");
const IApiKey_1 = require("./IApiKey");
const IBilling_1 = require("./IBilling");
const IBranding_1 = require("./IBranding");
const IBusinessProfile_1 = require("./IBusinessProfile");
const ICheckout_1 = require("./ICheckout");
const ICoupon_1 = require("./ICoupon");
const ICustomer_1 = require("./ICustomer");
const IFee_1 = require("./IFee");
const IIntegrations_1 = require("./IIntegrations");
const IIntegrationsFtx_1 = require("./IIntegrationsFtx");
const IInvoice_1 = require("./IInvoice");
const ILog_1 = require("./ILog");
const IPaymentIntent_1 = require("./IPaymentIntent");
const IPaymentLink_1 = require("./IPaymentLink");
const IPayments_1 = require("./IPayments");
const IPayoutWallet_1 = require("./IPayoutWallet");
const IPrice_1 = require("./IPrice");
const IProduct_1 = require("./IProduct");
const IRequest_1 = require("./IRequest");
const IResponse_1 = require("./IResponse");
const ISettings_1 = require("./ISettings");
const ISubscription_1 = require("./ISubscription");
const ITeamMember_1 = require("./ITeamMember");
const ITransfer_1 = require("./ITransfer");
const IWallet_1 = require("./IWallet");
const IWebhook_1 = require("./IWebhook");
const InvoiceCreateRequest_1 = require("./InvoiceCreateRequest");
const InvoiceListResponse_1 = require("./InvoiceListResponse");
const InvoicePayRequest_1 = require("./InvoicePayRequest");
const InvoiceUpdateRequest_1 = require("./InvoiceUpdateRequest");
const LineItem_1 = require("./LineItem");
const LogListResponse_1 = require("./LogListResponse");
const PaymentIntentCreateRequest_1 = require("./PaymentIntentCreateRequest");
const PaymentIntentListResponse_1 = require("./PaymentIntentListResponse");
const PaymentIntentUpdateRequest_1 = require("./PaymentIntentUpdateRequest");
const PaymentLinkCreateRequest_1 = require("./PaymentLinkCreateRequest");
const PaymentLinkListResponse_1 = require("./PaymentLinkListResponse");
const PaymentLinkUpdateRequest_1 = require("./PaymentLinkUpdateRequest");
const PayoutWalletCreateRequest_1 = require("./PayoutWalletCreateRequest");
const PayoutWalletListResponse_1 = require("./PayoutWalletListResponse");
const PayoutWalletUpdateRequest_1 = require("./PayoutWalletUpdateRequest");
const PriceCreateRequest_1 = require("./PriceCreateRequest");
const PriceListResponse_1 = require("./PriceListResponse");
const PriceUpdateRequest_1 = require("./PriceUpdateRequest");
const ProductCreateRequest_1 = require("./ProductCreateRequest");
const ProductListResponse_1 = require("./ProductListResponse");
const ProductUpdateRequest_1 = require("./ProductUpdateRequest");
const SubscriptionCreateRequest_1 = require("./SubscriptionCreateRequest");
const SubscriptionListResponse_1 = require("./SubscriptionListResponse");
const SubscriptionUpdateRequest_1 = require("./SubscriptionUpdateRequest");
const TransferCreateRequest_1 = require("./TransferCreateRequest");
const TransferListResponse_1 = require("./TransferListResponse");
const WalletCreateRequest_1 = require("./WalletCreateRequest");
const WalletListResponse_1 = require("./WalletListResponse");
const WalletUpdateRequest_1 = require("./WalletUpdateRequest");
const WebhookCreateRequest_1 = require("./WebhookCreateRequest");
const WebhookListResponse_1 = require("./WebhookListResponse");
const WebhookUpdateRequest_1 = require("./WebhookUpdateRequest");
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
    "ApiKeyType",
    "Chain",
    "CheckoutStatus",
    "CouponDuration",
    "Currency",
    "EventType",
    "InvoiceStatus",
    "PaymentIntentStatus",
    "PayoutWallet",
    "SubscriptionStatus",
]);
let typeMap = {
    "AccountConnectRequest": AccountConnectRequest_1.AccountConnectRequest,
    "AccountCreateRequest": AccountCreateRequest_1.AccountCreateRequest,
    "AccountDashboardAccessRequest": AccountDashboardAccessRequest_1.AccountDashboardAccessRequest,
    "AccountListResponse": AccountListResponse_1.AccountListResponse,
    "AccountUpdateRequest": AccountUpdateRequest_1.AccountUpdateRequest,
    "Address": Address_1.Address,
    "AfterCompletion": AfterCompletion_1.AfterCompletion,
    "ApiKeyCreateRequest": ApiKeyCreateRequest_1.ApiKeyCreateRequest,
    "ApiKeyListResponse": ApiKeyListResponse_1.ApiKeyListResponse,
    "BasePrice": BasePrice_1.BasePrice,
    "CheckoutCreateRequest": CheckoutCreateRequest_1.CheckoutCreateRequest,
    "CheckoutListResponse": CheckoutListResponse_1.CheckoutListResponse,
    "CouponCreateRequest": CouponCreateRequest_1.CouponCreateRequest,
    "CouponListResponse": CouponListResponse_1.CouponListResponse,
    "CouponUpdateRequest": CouponUpdateRequest_1.CouponUpdateRequest,
    "CustomAmount": CustomAmount_1.CustomAmount,
    "CustomerCreateRequest": CustomerCreateRequest_1.CustomerCreateRequest,
    "CustomerCreateRequestBillingDetails": CustomerCreateRequestBillingDetails_1.CustomerCreateRequestBillingDetails,
    "CustomerDetails": CustomerDetails_1.CustomerDetails,
    "CustomerListResponse": CustomerListResponse_1.CustomerListResponse,
    "CustomerUpdateRequest": CustomerUpdateRequest_1.CustomerUpdateRequest,
    "FeeCreateRequest": FeeCreateRequest_1.FeeCreateRequest,
    "FeeListResponse": FeeListResponse_1.FeeListResponse,
    "Headers": Headers_1.Headers,
    "IAccount": IAccount_1.IAccount,
    "IApiKey": IApiKey_1.IApiKey,
    "IBilling": IBilling_1.IBilling,
    "IBranding": IBranding_1.IBranding,
    "IBusinessProfile": IBusinessProfile_1.IBusinessProfile,
    "ICheckout": ICheckout_1.ICheckout,
    "ICoupon": ICoupon_1.ICoupon,
    "ICustomer": ICustomer_1.ICustomer,
    "IFee": IFee_1.IFee,
    "IIntegrations": IIntegrations_1.IIntegrations,
    "IIntegrationsFtx": IIntegrationsFtx_1.IIntegrationsFtx,
    "IInvoice": IInvoice_1.IInvoice,
    "ILog": ILog_1.ILog,
    "IPaymentIntent": IPaymentIntent_1.IPaymentIntent,
    "IPaymentLink": IPaymentLink_1.IPaymentLink,
    "IPayments": IPayments_1.IPayments,
    "IPayoutWallet": IPayoutWallet_1.IPayoutWallet,
    "IPrice": IPrice_1.IPrice,
    "IProduct": IProduct_1.IProduct,
    "IRequest": IRequest_1.IRequest,
    "IResponse": IResponse_1.IResponse,
    "ISettings": ISettings_1.ISettings,
    "ISubscription": ISubscription_1.ISubscription,
    "ITeamMember": ITeamMember_1.ITeamMember,
    "ITransfer": ITransfer_1.ITransfer,
    "IWallet": IWallet_1.IWallet,
    "IWebhook": IWebhook_1.IWebhook,
    "InvoiceCreateRequest": InvoiceCreateRequest_1.InvoiceCreateRequest,
    "InvoiceListResponse": InvoiceListResponse_1.InvoiceListResponse,
    "InvoicePayRequest": InvoicePayRequest_1.InvoicePayRequest,
    "InvoiceUpdateRequest": InvoiceUpdateRequest_1.InvoiceUpdateRequest,
    "LineItem": LineItem_1.LineItem,
    "LogListResponse": LogListResponse_1.LogListResponse,
    "PaymentIntentCreateRequest": PaymentIntentCreateRequest_1.PaymentIntentCreateRequest,
    "PaymentIntentListResponse": PaymentIntentListResponse_1.PaymentIntentListResponse,
    "PaymentIntentUpdateRequest": PaymentIntentUpdateRequest_1.PaymentIntentUpdateRequest,
    "PaymentLinkCreateRequest": PaymentLinkCreateRequest_1.PaymentLinkCreateRequest,
    "PaymentLinkListResponse": PaymentLinkListResponse_1.PaymentLinkListResponse,
    "PaymentLinkUpdateRequest": PaymentLinkUpdateRequest_1.PaymentLinkUpdateRequest,
    "PayoutWalletCreateRequest": PayoutWalletCreateRequest_1.PayoutWalletCreateRequest,
    "PayoutWalletListResponse": PayoutWalletListResponse_1.PayoutWalletListResponse,
    "PayoutWalletUpdateRequest": PayoutWalletUpdateRequest_1.PayoutWalletUpdateRequest,
    "PriceCreateRequest": PriceCreateRequest_1.PriceCreateRequest,
    "PriceListResponse": PriceListResponse_1.PriceListResponse,
    "PriceUpdateRequest": PriceUpdateRequest_1.PriceUpdateRequest,
    "ProductCreateRequest": ProductCreateRequest_1.ProductCreateRequest,
    "ProductListResponse": ProductListResponse_1.ProductListResponse,
    "ProductUpdateRequest": ProductUpdateRequest_1.ProductUpdateRequest,
    "SubscriptionCreateRequest": SubscriptionCreateRequest_1.SubscriptionCreateRequest,
    "SubscriptionListResponse": SubscriptionListResponse_1.SubscriptionListResponse,
    "SubscriptionUpdateRequest": SubscriptionUpdateRequest_1.SubscriptionUpdateRequest,
    "TransferCreateRequest": TransferCreateRequest_1.TransferCreateRequest,
    "TransferListResponse": TransferListResponse_1.TransferListResponse,
    "WalletCreateRequest": WalletCreateRequest_1.WalletCreateRequest,
    "WalletListResponse": WalletListResponse_1.WalletListResponse,
    "WalletUpdateRequest": WalletUpdateRequest_1.WalletUpdateRequest,
    "WebhookCreateRequest": WebhookCreateRequest_1.WebhookCreateRequest,
    "WebhookListResponse": WebhookListResponse_1.WebhookListResponse,
    "WebhookUpdateRequest": WebhookUpdateRequest_1.WebhookUpdateRequest,
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