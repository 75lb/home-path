"use strict";

/**
Cross-platform home directory retriever
@module
@example
```js
> var getHomePath = require("home-path");
> getHomePath()
'/Users/Lloyd'
```
*/
module.exports = function() {
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
};
