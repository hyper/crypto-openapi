import { Account } from './Account';
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { PayoutWallet } from './PayoutWallet';
export declare class AccountAllOf {
    'branding'?: AccountAllOfBranding;
    'connectedAccounts'?: Array<string> | Array<Account>;
    'ethWallet'?: PayoutWallet;
    'invoicePrefix'?: string;
    'name': string;
    'parentAccount'?: string | Account;
    'platformAccount': boolean;
    'solWallet'?: PayoutWallet;
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
