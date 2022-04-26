'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InlineResponse200 = void 0;
class InlineResponse200 {
  constructor() {}
  static getAttributeTypeMap() {
    return InlineResponse200.attributeTypeMap;
  }
}
exports.InlineResponse200 = InlineResponse200;
InlineResponse200.discriminator = undefined;
InlineResponse200.attributeTypeMap = [
  {
    name: 'data',
    baseName: 'data',
    type: 'Set<Customer>',
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
//# sourceMappingURL=InlineResponse200.js.map
