# uniqId

A package that returns a unique ID, based on milliseconds and random factors.

## Usage
```js
  const uniqId = require('uniqId');
  
  console.log(uniqId()); // Something like: obs573fo9v

  console.log(uniqId(8)); // Something like: s573fo9v
```

## Parameters

`length` _(number, default 10)_: Length of the unique ID. **Lengths lower than 8 or higher than 12 are not supported!**