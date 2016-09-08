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

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-tl2` globally.

## Usage

Add `tl2` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tl2"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tl2/rule-name": 2
    }
}
```

## Supported Rules

* [blankline-around-block-startline](docs/rules/blankline-around-block-startline.md): enforce blankline before block statement and on first line in body of block




