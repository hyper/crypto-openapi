import { Chain } from './Chain';
export declare class IWallet {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'chain': Chain;
    'address': string;
    'customer': string;
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
