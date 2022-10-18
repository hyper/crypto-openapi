import { Chain } from './Chain';
export declare class IWallet {
    'account': string;
    'address': string;
    'chain': Chain;
    'created': number;
    'customer': string;
    'id': string;
    'object': string;
    'test': boolean;
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
