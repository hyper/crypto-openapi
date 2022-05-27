import { AccountsBranding } from './AccountsBranding';
import { AccountsSettings } from './AccountsSettings';
export declare class CreateAccountBody {
    'branding'?: AccountsBranding;
    'connected_accounts'?: Array<string>;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string;
    'platform_account'?: string;
    'settings'?: AccountsSettings;
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
