import { Account } from './Account';
import { LineItem } from './LineItem';
import { PaymentLinkAllOfAfterCompletion } from './PaymentLinkAllOfAfterCompletion';
export declare class PaymentLinkAllOf {
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'active'?: boolean;
    'after_completion'?: PaymentLinkAllOfAfterCompletion;
    'line_items'?: Array<LineItem>;
    'currency': PaymentLinkAllOfCurrencyEnum;
    'chain': PaymentLinkAllOfChainEnum;
    'expires_at'?: Date;
    'max_usages'?: number;
    'remaining_stock'?: number;
    'application_fee_percent'?: number;
    'url'?: string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare type PaymentLinkAllOfCurrencyEnum = "eth" | "sol";
export declare type PaymentLinkAllOfChainEnum = "eth" | "sol";
