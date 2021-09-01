/**
 * @fileoverview Export rules
 * @author yneves
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/single-export"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
});

ruleTester.run("single-export", rule, {
  valid: [
    'export const one = 1;'
  ],

  invalid: [
    {
      code: "export const one = 1; export const two = 2; export default {};",
      errors: [
        { message: "Multiple exports not allowed" },
        { message: "Multiple exports not allowed" },
      ],
    },
  ],
});
