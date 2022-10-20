import { IBusinessProfile } from './IBusinessProfile';
import { ISettings } from './ISettings';
export declare class AccountUpdateRequest {
    'settings'?: ISettings;
    'business_profile'?: IBusinessProfile;
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
