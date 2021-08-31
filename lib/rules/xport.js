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
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Export rules",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    console.log(JSON.stringify(context, null, 4));
    let count = 0;

    function countExport(node) {
      count++;
      console.log(node);
      if (count > 1) {
        context.report({
          node: node,
          message: `Export count: ${count}`,
          data: {
            identifier: node.name
          }
        });
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
