# eslint-config-xo-inferno [![Build Status](https://travis-ci.org/thiamsantos/eslint-config-xo-inferno.svg?branch=master)](https://travis-ci.org/thiamsantos/eslint-config-xo-inferno)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Inferno to be used with [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)

*Note: This is a fork of the great [eslint-config-react](https://github.com/sindresorhus/eslint-config-xo-react).*


## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-inferno eslint-plugin-inferno
```


## Usage

Add some ESLint config to your package.json:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-inferno"]
	}
}
```

Or to .eslintrc:

```json
{
	"extends": ["xo", "xo-inferno"]
}
```

Use the `space` sub-config if you want 2 space indentation instead of tabs:

```json
{
	"extends": ["xo", "xo-inferno/space"]
}
```

You can also mix it with a [XO](https://github.com/sindresorhus/xo) sub-config:

```json
{
	"extends": ["xo/esnext", "xo-inferno"]
}
```


## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-inferno eslint-plugin-inferno
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-inferno"
	}
}
```


## Related

- [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/sindresorhus/xo)


## License

MIT © [Thiago Santos](https://thiamsantos.github.io/)
