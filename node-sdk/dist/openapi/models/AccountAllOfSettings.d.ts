import { AccountAllOfSettingsBilling } from './AccountAllOfSettingsBilling';
import { AccountAllOfSettingsBranding } from './AccountAllOfSettingsBranding';
import { AccountAllOfSettingsPayments } from './AccountAllOfSettingsPayments';
export declare class AccountAllOfSettings {
    'billing'?: AccountAllOfSettingsBilling;
    'branding'?: AccountAllOfSettingsBranding;
    'payments'?: AccountAllOfSettingsPayments;
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
