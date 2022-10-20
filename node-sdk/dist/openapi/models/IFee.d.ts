export declare class IFee {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'platform_account'?: string;
    'internal': boolean;
    'payment_intent': string;
    'wallet': string;
    'percent': number;
    'description'?: string;
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
