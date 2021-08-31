/**
 * @fileoverview Export rules
 * @author yneves
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/xport"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
     ecmaVersion: 2015,
      sourceType: 'module'
     } ,
});

ruleTester.run("xport", rule, {
  valid: [
    'export const one = 1;'
  ],

  invalid: [
    {
      code: "export const one = 1; export const two = 2; export default {};",
      errors: [
        { message: "Export count: 2" },
        { message: "Export count: 3" },
      ],
    },
  ],
});
