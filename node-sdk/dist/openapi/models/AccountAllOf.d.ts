import { Account } from './Account';
import { AccountAllOfBranding } from './AccountAllOfBranding';
import { PayoutWallet } from './PayoutWallet';
export declare class AccountAllOf {
    'branding'?: AccountAllOfBranding;
    'connected_accounts'?: Array<string> | Array<Account>;
    'eth_wallet'?: PayoutWallet;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string | Account;
    'payout_wallets'?: Array<PayoutWallet>;
    'platform_account': boolean;
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
