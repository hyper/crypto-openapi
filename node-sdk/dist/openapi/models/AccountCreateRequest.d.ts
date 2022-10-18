import { IBusinessProfile } from './IBusinessProfile';
import { ISettings } from './ISettings';
export declare class AccountCreateRequest {
    'business_profile'?: IBusinessProfile;
    'settings'?: ISettings;
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
