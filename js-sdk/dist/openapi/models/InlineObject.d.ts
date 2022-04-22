import { InlineResponse200BillingDetails } from './InlineResponse200BillingDetails';
export declare class InlineObject {
    'account': string;
    'billingDetails': InlineResponse200BillingDetails;
    'email': string;
    'name': string;
    'phone': string;
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
