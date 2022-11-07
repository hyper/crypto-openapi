export declare class IFee {
    'account': string;
    'created': number;
    'description'?: string;
    'id': string;
    'internal': boolean;
    'object': string;
    'payment_intent': string;
    'percent': number;
    'platform_account'?: string;
    'test': boolean;
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
