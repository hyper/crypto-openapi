import { InlineResponse200BillingDetails } from './InlineResponse200BillingDetails';
export declare class InlineResponse2002 {
    'account': string;
    'billingDetails': InlineResponse200BillingDetails;
    'created': string;
    'email': string;
    'id'?: string;
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
