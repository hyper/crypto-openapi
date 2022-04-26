import { Payment } from './Payment';
import { Set } from './Set';
export declare class InlineResponse2004 {
  'data': Set<Payment>;
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
