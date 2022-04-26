import { CustomerBillingDetails } from './CustomerBillingDetails';
export declare class Customer {
  'id': string;
  'account'?: string;
  'billingDetails'?: CustomerBillingDetails;
  'created': Date;
  'email'?: string;
  'name'?: string;
  'phone'?: string;
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
