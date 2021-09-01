/**
 * @fileoverview Export rules
 * @author yneves
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: "Enforce single export per file",
      category: "Export",
      recommended: false,
      url: null,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    let count = 0;

    function reportError(node) {
      context.report({
        node: node,
        message: 'Multiple exports not allowed',
      });
    }

    function countExport(node) {
      count++;
      if (count > 1) {
        reportError(node);
      }
    }

    return {
      ExportDefaultDeclaration: (node) => {
        countExport(node);
      },
      ExportNamedDeclaration: (node) => {
        countExport(node);
      },
    };
  },
};
