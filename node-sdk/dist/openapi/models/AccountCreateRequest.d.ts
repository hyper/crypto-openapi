import { IBusinessProfile } from './IBusinessProfile';
import { ISettings } from './ISettings';
export declare class AccountCreateRequest {
    'settings'?: ISettings;
    'business_profile'?: IBusinessProfile;
    'connected_accounts'?: Array<string>;
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
