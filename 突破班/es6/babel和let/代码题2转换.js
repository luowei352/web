"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

var a = 10;
20, _readOnlyError("a");
