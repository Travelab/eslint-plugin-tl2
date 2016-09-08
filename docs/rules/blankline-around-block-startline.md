# Enforce consistent blankline around first line of block (blankline-around-block-startline)
(notfixable)


## Rule Details

This rule enforce consistent blankline before block statement and on first line inside block

The following patterns are considered warnings:

```js
/* eslint tl2/blankline-around-block-startline: ["error", {"after": true, "before": true}]*/
function foo () {
  if (x) {
    bar = 1
  }
}
```

The following patterns are not warnings:

```js
/* eslint tl2/blankline-around-block-startline: ["error", {"after": true, "before": true}]*/
/*blankline*/
function foo () {
/*blankline*/
  if (x) {
/*blankline*/
    bar = 1
  }
}
```

### Options

This ruls has on object option:
* `"after"`: (`boolean`) enforce blankline inside block statement on first line
* `"before"`: (`boolean`) enforce blankline before block statement
