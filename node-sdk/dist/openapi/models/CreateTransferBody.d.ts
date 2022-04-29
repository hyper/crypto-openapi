export declare class CreateTransferBody {
    'account': string;
    'amount'?: string;
    'description'?: string;
    'invoice': string;
    'percent'?: number;
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
