# gobble-searchreplace

Search and replace text strings in your GobbleJS workflow

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-searchreplace
```

## Usage

In your `gobblefile.js`:

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'searchreplace', {
  // Search for all instances of "foo"...
  search: 'foo',

  // ... and replace them with "bar".
  replace: 'bar'
});
```

The `search` and `replace` options behave exactly as the parameters for [`String.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

This means that the `search` option can be a `String` or a `RegExp`, and the `replace`
option can be a `String` or a `Function`. Check the [documentation for `String.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) for details.


## License

```
"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.
```
