import { AccountsBranding } from './AccountsBranding';
export declare class CreateAccountBody {
    'branding'?: AccountsBranding;
    'connected_accounts'?: Array<string>;
    'invoice_prefix'?: string;
    'name': string;
    'parent_account'?: string;
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
