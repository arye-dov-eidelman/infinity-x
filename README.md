<a
  href="https://travis-ci.org/Xotic750/infinity-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/infinity-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/infinity-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/infinity-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/infinity-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/infinity-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/infinity-x"
  title="npm version">
<img src="https://badge.fury.io/js/infinity-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/infinity-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/infinity-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/infinity-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/infinity-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/infinity-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/infinity-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_infinity-x"></a>

## infinity-x

The constant value Infinity.

<a name="exp_module_infinity-x--module.exports"></a>

### `module.exports` : <code>number</code> ⏏

The constant value Infinity derived mathematically by 1 / 0.

**Kind**: Exported member  
**Example**

```js
import INFINITY from 'infinity-x';

console.log(INFINITY === Infinity); // true
console.log(-INFINITY === -Infinity); // true
console.log(INFINITY === -Infinity); // false
```

Alternatively this can be used as a zero install package,
without adding anything to your package.json.
This option improved performance in all areas,
including but not limited to: install times, build times, bundle size, execution time.

```js
const INFINITY = 1 / 0

```
