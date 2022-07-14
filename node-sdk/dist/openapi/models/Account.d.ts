import { AccountAllOfBusinessProfile } from './AccountAllOfBusinessProfile';
import { AccountAllOfSettings } from './AccountAllOfSettings';
import { AccountAllOfTeam } from './AccountAllOfTeam';
import { PayoutWallet } from './PayoutWallet';
export declare class Account {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'platform_account': boolean;
    'connected_accounts'?: Array<Account>;
    'parent_account'?: string | Account;
    'team'?: Array<AccountAllOfTeam>;
    'payout_wallets'?: Array<PayoutWallet>;
    'application_fee_percent': number;
    'verified'?: boolean;
    'settings'?: AccountAllOfSettings;
    'business_profile'?: AccountAllOfBusinessProfile;
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
