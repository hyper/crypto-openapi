import { CustomerAllOfBillingDetailsAddress } from './CustomerAllOfBillingDetailsAddress';
export declare class CustomerAllOfBillingDetails {
    'address'?: CustomerAllOfBillingDetailsAddress;
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
