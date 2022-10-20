import { IBranding } from './IBranding';
import { IBusinessProfile } from './IBusinessProfile';
import { IIntegrations } from './IIntegrations';
import { ISettings } from './ISettings';
import { ITeamMember } from './ITeamMember';
export declare class IAccount {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'parent_account'?: string;
    'branding': IBranding;
    'invoice_prefix'?: string;
    'connected_accounts': Array<string>;
    'platform_account': boolean;
    'webhook_portal'?: string;
    'application_fee_percent': number;
    'team': Array<ITeamMember>;
    'verified': boolean;
    'business_profile': IBusinessProfile;
    'settings': ISettings;
    'integrations': IIntegrations;
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
