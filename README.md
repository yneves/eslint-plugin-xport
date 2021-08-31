# eslint-plugin-xport

Export rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-xport`:

```sh
npm install eslint-plugin-xport --save-dev
```

## Usage

Add `xport` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "xport"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "xport/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


