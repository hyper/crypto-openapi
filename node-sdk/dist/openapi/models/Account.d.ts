import { AccountBranding } from './AccountBranding';
import { PayoutWallet } from './PayoutWallet';
export declare class Account {
    'branding'?: AccountBranding;
    'connectedAccounts'?: Array<any>;
    'created'?: Date;
    'ethWallet'?: PayoutWallet;
    'id'?: string;
    'invoicePrefix'?: string;
    'name': string;
    'parentAccount'?: any;
    'platformAccount'?: boolean;
    'solWallet'?: PayoutWallet;
    'test'?: boolean;
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
