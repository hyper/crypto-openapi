import { Account } from './Account';
import { AccountAllOfBusinessProfile } from './AccountAllOfBusinessProfile';
import { AccountAllOfIntegrations } from './AccountAllOfIntegrations';
import { AccountAllOfSettings } from './AccountAllOfSettings';
import { AccountAllOfTeam } from './AccountAllOfTeam';
import { PayoutWallet } from './PayoutWallet';
export declare class AccountAllOf {
    'parent_account'?: string | Account;
    'connected_accounts'?: Array<string>;
    'platform_account': boolean;
    'application_fee_percent': number;
    'team'?: Array<AccountAllOfTeam>;
    'verified'?: boolean;
    'business_profile'?: AccountAllOfBusinessProfile;
    'settings'?: AccountAllOfSettings;
    'integrations'?: AccountAllOfIntegrations;
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
