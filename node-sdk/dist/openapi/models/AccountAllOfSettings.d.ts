import { AccountAllOfSettingsBilling } from './AccountAllOfSettingsBilling';
import { AccountAllOfSettingsPayments } from './AccountAllOfSettingsPayments';
import { AccountsBranding } from './AccountsBranding';
export declare class AccountAllOfSettings {
    'billing'?: AccountAllOfSettingsBilling;
    'branding'?: AccountsBranding;
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
