export declare class Product {
  'id': string;
  'account': string;
  'amount': number;
  'baseCurrency'?: string;
  'chain'?: string;
  'created': Date;
  'currency': ProductCurrencyEnum;
  'name': string;
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
export declare type ProductCurrencyEnum = 'succeeded' | 'failed';
