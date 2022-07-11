import { AccountAllOfBusinessProfileLinks } from './AccountAllOfBusinessProfileLinks';
import { AccountAllOfBusinessProfileSupport } from './AccountAllOfBusinessProfileSupport';
export declare class AccountAllOfBusinessProfile {
    'business_description'?: string;
    'links'?: AccountAllOfBusinessProfileLinks;
    'name'?: string;
    'support'?: AccountAllOfBusinessProfileSupport;
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
