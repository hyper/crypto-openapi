import { AccountsBranding } from './AccountsBranding';
import { AccountsSettings } from './AccountsSettings';
export declare class UpdateAccountBody {
    'branding'?: AccountsBranding;
    'invoice_prefix'?: string;
    'name'?: string;
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
