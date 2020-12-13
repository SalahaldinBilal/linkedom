'use strict';
const voidElements = {
  test() {
    return true;
  }
};

const Mime = {
  'text/html': {
    docType: '<!DOCTYPE html>',
    ignoreCase: true,
    voidElements: /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i
  },
  'text/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'application/xhtml+xml': {
    docType: '<?xml version="1.0" encoding="utf-8"?>',
    ignoreCase: false,
    voidElements
  },
  'image/svg+xml': {
    docType: '',
    voidElements
  }
};
exports.Mime = Mime;

const Type = {
  Element: 1, ElementEnd: -1,
  Attribute: 2,
  Text: 3,
  Comment: 8,
  Document: 9,
  Fragment: 11
};
exports.Type = Type;

const invalidOperation = () => {
  throw new TypeError('invalid operation');
};
exports.invalidOperation = invalidOperation;

const link = (before, after) => {
  before.next = after;
  after.prev = before;
};
exports.link = link;
