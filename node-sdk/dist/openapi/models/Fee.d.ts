export declare class Fee {
  'id': string;
  'account'?: string;
  'amount'?: number;
  'created': Date;
  'currency'?: string;
  'description'?: string;
  'internal'?: boolean;
  'invoice'?: string;
  'percent'?: number;
  'usdAmount'?: number;
  'wallet'?: string;
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
