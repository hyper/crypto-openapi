import { AccountAllOfIntegrationsFtx } from './AccountAllOfIntegrationsFtx';
export declare class AccountAllOfIntegrations {
    'ftx'?: AccountAllOfIntegrationsFtx;
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
