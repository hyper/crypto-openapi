import { AccountsBranding } from './AccountsBranding';
export declare class UpdateAccountBody {
    'branding'?: AccountsBranding;
    'invoice_prefix'?: string;
    'name'?: string;
    'platform_account'?: boolean;
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
