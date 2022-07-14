import { AccountAllOfBusinessProfileLinks } from './AccountAllOfBusinessProfileLinks';
import { AccountAllOfBusinessProfileSupport } from './AccountAllOfBusinessProfileSupport';
export declare class AccountAllOfBusinessProfile {
    'name'?: string;
    'business_description'?: string;
    'support'?: AccountAllOfBusinessProfileSupport;
    'links'?: AccountAllOfBusinessProfileLinks;
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
