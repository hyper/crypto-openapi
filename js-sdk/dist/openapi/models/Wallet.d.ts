export declare class Wallet {
  'id': string;
  'account': string;
  'address'?: string;
  'admin'?: boolean;
  'chain': string;
  'created': Date;
  'customer'?: WalletCustomerEnum;
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
export declare type WalletCustomerEnum = 'succeeded' | 'failed';
