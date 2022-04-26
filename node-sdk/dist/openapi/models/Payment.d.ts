export declare class Payment {
    'id': string;
    'account': string;
    'amount'?: number;
    'created': Date;
    'currency'?: string;
    'customer'?: string;
    'errorMessage'?: string;
    'exchangeRate'?: number;
    'invoice'?: string;
    'status'?: PaymentStatusEnum;
    'usdAmount'?: number;
    'wallet': string;
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
export declare type PaymentStatusEnum = "succeeded" | "failed";
