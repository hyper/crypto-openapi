'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InlineResponse2001 = void 0;
class InlineResponse2001 {
  constructor() {}
  static getAttributeTypeMap() {
    return InlineResponse2001.attributeTypeMap;
  }
}
exports.InlineResponse2001 = InlineResponse2001;
InlineResponse2001.discriminator = undefined;
InlineResponse2001.attributeTypeMap = [
  {
    name: 'data',
    baseName: 'data',
    type: 'Set<Fee>',
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
//# sourceMappingURL=InlineResponse2001.js.map
