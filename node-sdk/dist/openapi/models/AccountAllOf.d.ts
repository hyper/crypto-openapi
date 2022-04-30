import { Account } from './Account';
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { PayoutWallet } from './PayoutWallet';
export declare class AccountAllOf {
    'branding'?: AccountAllOfBranding;
    'connected_accounts'?: Array<string> | Array<Account>;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string | Account;
    'platform_account': boolean;
    'payout_wallets'?: Array<PayoutWallet>;
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
