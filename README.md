# eslint-plugin-tl2

Code styleguide for Travelab2.0 frontend

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-tl2`:

```
$ npm install eslint-plugin-tl2 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-tl2`, `babel-eslint` and `eslint-plugin-react` globally.

## Usage

Add `plugin:tl2/recommended` to the extends section of your `.eslintrc` configuration file:

```json
{
    "extends": [
        "plugin:tl2/recommended"
    ]
}
```

And now all rules for code styleguide are configured include eslint rules and eslint-plugin-react rules

## Custom Rules

* [blankline-around-block-startline](docs/rules/blankline-around-block-startline.md): enforce blankline before block statement and on first line in body of block




