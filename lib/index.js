/**
 * @fileoverview Code styleguide for Travelab2.0 frontend
 * @author Travelab2.0
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
      "allowImportExportEverywhere": false,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "@travelab/tl2"
    ],
    // "root": true,
    "rules": {
      "array-bracket-spacing": [
        "error",
        "always"
      ],
      "arrow-parens": "error",
      "arrow-spacing": "error",
      "block-spacing": "error",
      "brace-style": "error",
      "func-call-spacing": [
        "error",
        "never"
      ],
      "indent": [
        "error",
        "tab"
      ],
      "key-spacing": "error",
      "keyword-spacing": "error",
      "newline-before-return": "error",
      "no-confusing-arrow": [
        "error",
        {
          "allowParens": false
        }
      ],
      "no-console": "off",
      "no-constant-condition": [
        "error",
        {
          "checkLoops": false
        }
      ],
      "no-debugger": "off",
      "no-empty": [
        "error",
        {
          "allowEmptyCatch": true
        }
      ],
      "no-whitespace-before-property": "error",
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "operator-linebreak": [
        "error",
        "none",
        {
          "overrides": {
            ":": "before",
            "?": "before"
          }
        }
      ],
      "quotes": [
        "error",
        "single"
      ],
      "react/jsx-curly-spacing": [
        "error",
        "never"
      ],
      "react/jsx-filename-extension": "warn",
      "react/jsx-indent": [
        "error",
        "tab"
      ],
      "react/jsx-pascal-case": [
        "error",
        {
          "allowAllCaps": true
        }
      ],
      "react/jsx-space-before-closing": [
        "error",
        "never"
      ],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/no-unknown-property": "error",
      "react/react-in-jsx-scope": "error",
      "react/self-closing-comp": [
        "error",
        {
          "component": true,
          "html": true
        }
      ],
      "semi": [
        "error",
        "never"
      ],
      "space-before-blocks": "error",
      "space-before-function-paren": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "tl2/blankline-around-block-startline": [
        "error",
        {
          "after": true,
          "before": true
        }
      ]
    }
  }
}

