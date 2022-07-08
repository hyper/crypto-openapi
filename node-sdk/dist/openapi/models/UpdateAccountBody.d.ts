import { AccountsBranding } from './AccountsBranding';
import { AccountsIdSettings } from './AccountsIdSettings';
export declare class UpdateAccountBody {
    'branding'?: AccountsBranding;
    'invoice_prefix'?: string;
    'name'?: string;
    'settings'?: AccountsIdSettings;
    'settings_retry_period_duration'?: string;
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
