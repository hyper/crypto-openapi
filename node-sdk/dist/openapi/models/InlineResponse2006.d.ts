import { Set } from './Set';
import { Wallet } from './Wallet';
export declare class InlineResponse2006 {
  'data': Set<Wallet>;
  'hasMore': boolean;
  'page': number;
  'total': number;
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
