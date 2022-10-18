import { IBranding } from './IBranding';
import { IBusinessProfile } from './IBusinessProfile';
import { IIntegrations } from './IIntegrations';
import { ISettings } from './ISettings';
import { ITeamMember } from './ITeamMember';
export declare class IAccount {
    'application_fee_percent': number;
    'branding': IBranding;
    'business_profile': IBusinessProfile;
    'connected_accounts': Array<string>;
    'created': number;
    'id': string;
    'integrations': IIntegrations;
    'invoice_prefix'?: string;
    'object': string;
    'parent_account'?: string;
    'platform_account': boolean;
    'settings': ISettings;
    'team': Array<ITeamMember>;
    'test': boolean;
    'verified': boolean;
    'webhook_portal'?: string;
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
