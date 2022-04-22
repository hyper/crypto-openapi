import { InlineResponse200BillingDetailsAddress } from './InlineResponse200BillingDetailsAddress';
export declare class InlineResponse200BillingDetails {
    'address': InlineResponse200BillingDetailsAddress;
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
