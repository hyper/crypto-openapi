import { Chain } from './Chain';
import { CouponDuration } from './CouponDuration';
import { Currency } from './Currency';
export declare class ICoupon {
    'account': string;
    'amount_off': number;
    'archived': boolean;
    'chain'?: Chain;
    'code': string;
    'created': number;
    'currency'?: Currency;
    'duration': CouponDuration;
    'duration_in_days'?: number;
    'id': string;
    'max_redemptions'?: number;
    'name': string;
    'object': string;
    'percent_off': number;
    'products': Array<string>;
    'redeem_by'?: Date | number;
    'test': boolean;
    'times_redeemed': number;
    'valid': boolean;
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
