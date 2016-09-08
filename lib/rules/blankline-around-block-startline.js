/**
 * @fileoverview Block statement should start from emty line. All code should start from second line of block
 * @author Travelab2.0
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Block statement should start from emty line. All code should start from second line of block",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
            {
                "type": "object",
                "properties": {
                    "after": {
                        "type": "boolean"
                    },
                    "before": {
                        "type": "boolean"
                    }
                },
                "additionalProperties": false
            }
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods

            BlockStatement: (node) => {
                var sourceCode = context.getSourceCode()
                var lineAfterBlock = sourceCode.lines[node.loc.start.line]
                var lineBeforeBlock = sourceCode.lines[node.loc.start.line - 2]
                var isAfter = context.options[0].after
                var isBefore = context.options[0].before

                if (lineAfterBlock.trim().length && isAfter) {
                    context.report({
                        node: node,
                        message: "Expected blank line after block statement"
                    })
                } else if (!lineAfterBlock.trim().length && !isAfter) {
                    context.report({
                        node: node,
                        message: "Unexpected blank line after block statement"
                    })
                }
                
                if (lineBeforeBlock.trim().length && isBefore) {
                    context.report({
                        node: node,
                        message: "Expected blank line before block statement"
                    })
                } else if (!lineBeforeBlock.trim().length && !isBefore) {
                    context.report({
                        node: node,
                        message: "Unexpected blank line before block statement"
                    })
                }
            }

        };
    }
};
