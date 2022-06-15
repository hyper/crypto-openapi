import { AccountsBranding } from './AccountsBranding';
import { AccountsIdSettings } from './AccountsIdSettings';
export declare class UpdateAccountBody {
    'branding'?: AccountsBranding;
    'invoice_prefix'?: string;
    'name'?: string;
    'settings'?: AccountsIdSettings;
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
