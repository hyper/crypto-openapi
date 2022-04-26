'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InlineResponse2007 = void 0;
class InlineResponse2007 {
  constructor() {}
  static getAttributeTypeMap() {
    return InlineResponse2007.attributeTypeMap;
  }
}
exports.InlineResponse2007 = InlineResponse2007;
InlineResponse2007.discriminator = undefined;
InlineResponse2007.attributeTypeMap = [
  {
    name: 'data',
    baseName: 'data',
    type: 'Set<Webhook>',
    format: '',
  },
  {
    name: 'hasMore',
    baseName: 'has_more',
    type: 'boolean',
    format: '',
  },
  {
    name: 'page',
    baseName: 'page',
    type: 'number',
    format: '',
  },
  {
    name: 'total',
    baseName: 'total',
    type: 'number',
    format: '',
  },
];
//# sourceMappingURL=InlineResponse2007.js.map
