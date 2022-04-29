export declare class CreateTransferBody {
    'account': string;
    'invoice': string;
    'wallet': string;
    'percent'?: number;
    'description'?: string;
    'amount'?: string;
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
