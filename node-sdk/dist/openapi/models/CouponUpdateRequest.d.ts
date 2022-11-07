import { Chain } from './Chain';
import { CouponDuration } from './CouponDuration';
import { Currency } from './Currency';
export declare class CouponUpdateRequest {
    'amount_off'?: number;
    'archived'?: boolean;
    'chain'?: Chain;
    'code'?: string;
    'currency'?: Currency;
    'duration'?: CouponDuration;
    'duration_in_days'?: number;
    'max_redemptions'?: number;
    'name'?: string;
    'percent_off'?: number;
    'products'?: Array<string>;
    'redeem_by'?: Date | number;
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
