import { AccountBranding } from './AccountBranding';
export declare class Account {
  'branding'?: AccountBranding;
  'created': Date;
  'ethWallet'?: any;
  'id': string;
  'invoicePrefix'?: string;
  'name'?: string;
  'solWallet'?: any;
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
