export declare class APIKey {
  'account'?: string;
  'admin'?: boolean;
  'created': Date;
  'id': string;
  'key'?: string;
  'type'?: APIKeyTypeEnum;
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
export declare type APIKeyTypeEnum = 'publishable' | 'secret' | 'restricted';
