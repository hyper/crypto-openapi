import { Account } from './Account';
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { PayoutWallet } from './PayoutWallet';
export declare class AccountAllOf {
    'parent_account'?: string | Account;
    'name': string;
    'branding'?: AccountAllOfBranding;
    'invoice_prefix'?: string;
    'connected_accounts'?: Array<string> | Array<Account>;
    'platform_account': boolean;
    'eth_wallet'?: PayoutWallet;
    'sol_wallet'?: PayoutWallet;
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
