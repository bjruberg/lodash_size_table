const CompressionPlugin = require("compression-webpack-plugin");
const _ = require("lodash");
const path = require("path");
const webpack = require("webpack");

const files = [
    "add",
    "defaultsDeep",
    "filter",
    "get",
    "isBoolean",
    "isTypedArray",
    "merge",
    "propertyOf",
    "slice",
    "throttle",
    "uniqWith",
    "after",
    "defaults",
    "filterObject",
    "groupBy",
    "isBuffer",
    "isUndefined",
    "mergeWith",
    "pullAllBy",
    "snakeCase",
    "times",
    "unset",
    "at",
    "defaultToAny",
    "findKey",
    "gte",
    "isDate",
    "isWeakMap",
    "method",
    "pullAll",
    "some",
    "toArray",
    "unzip",
    "attempt",
    "defaultTo",
    "findLastIndex",
    "gt",
    "isElement",
    "isWeakSet",
    "methodOf",
    "pullAllWith",
    "someValue",
    "toFinite",
    "unzipWith",
    "before",
    "defer",
    "findLast",
    "hasIn",
    "isEmpty",
    "kebabCase",
    "minBy",
    "pullAt",
    "sortedIndexBy",
    "toInteger",
    "update",
    "camelCase",
    "delay",
    "findLastKey",
    "has",
    "isEqualWith",
    "keyBy",
    "multiply",
    "pull",
    "sortedIndex",
    "toLength",
    "updateWith",
    "capitalize",
    "differenceBy",
    "first",
    "hasPathIn",
    "isError",
    "keys",
    "negate",
    "random",
    "sortedIndexOf",
    "toNumber",
    "upperCase",
    "castArray",
    "difference",
    "flatMapDeep",
    "hasPath",
    "isFunction",
    "lastIndexOf",
    "nthArg",
    "range",
    "sortedLastIndexBy",
    "toPath",
    "upperFirst",
    "ceil",
    "differenceWith",
    "flatMapDepth",
    "head",
    "isLength",
    "last",
    "nth",
    "rangeRight",
    "sortedLastIndex",
    "toPlainObject",
    "values",
    "chunk",
    "divide",
    "flatMap",
    "indexOf",
    "isMap",
    "lowerCase",
    "once",
    "reduce",
    "sortedLastIndexOf",
    "toSafeInteger",
    "without",
    "clamp",
    "drop",
    "flattenDeep",
    "initial",
    "isMatch",
    "lowerFirst",
    "orderBy",
    "reduceRight",
    "sortedUniqBy",
    "toString",
    "words",
    "cloneDeep",
    "dropRight",
    "flattenDepth",
    "inRange",
    "isMatchWith",
    "lte",
    "overArgs",
    "reject",
    "sortedUniq",
    "transform",
    "xorBy",
    "cloneDeepWith",
    "dropRightWhile",
    "flatten",
    "intersectionBy",
    "isNative",
    "lt",
    "overEvery",
    "remove",
    "split",
    "trimEnd",
    "xor",
    "clone",
    "dropWhile",
    "flip",
    "intersection",
    "isNil",
    "map",
    "over",
    "repeat",
    "startCase",
    "trim",
    "xorWith",
    "cloneWith",
    "each",
    "floor",
    "intersectionWith",
    "isNull",
    "mapKey",
    "overSome",
    "replace",
    "startsWith",
    "trimStart",
    "zip",
    "compact",
    "eachRight",
    "flow",
    "invertBy",
    "isNumber",
    "mapObject",
    "padEnd",
    "result",
    "subtract",
    "truncate",
    "zipObjectDeep",
    "cond",
    "endsWith",
    "flowRight",
    "invert",
    "isObject",
    "mapValue",
    "pad",
    "round",
    "sumBy",
    "unescape",
    "zipObject",
    "conforms",
    "eqDeep",
    "forEach",
    "invoke",
    "isObjectLike",
    "matches",
    "padStart",
    "sample",
    "sum",
    "unionBy",
    "zipWith",
    "conformsTo",
    "eq",
    "forEachRight",
    "invokeMap",
    "isPlainObject",
    "matchesProperty",
    "parseInt",
    "sampleSize",
    "tail",
    "union",
    "countBy",
    "escape",
    "forOwn",
    "isArguments",
    "isRegExp",
    "maxBy",
    "partition",
    "set",
    "take",
    "unionWith",
    "create",
    "escapeRegExp",
    "forOwnRight",
    "isArrayBuffer",
    "isSet",
    "meanBy",
    "pickBy",
    "setWith",
    "takeRight",
    "uniqBy",
    "debounce",
    "every",
    "fromEntries",
    "isArrayLike",
    "isString",
    "mean",
    "pick",
    "shuffle",
    "takeRightWhile",
    "uniq",
    "deburr",
    "everyValue",
    "functions",
    "isArrayLikeObject",
    "isSymbol",
    "memoize",
    "property",
    "size",
    "takeWhile",
    "uniqueId"
];

module.exports = _.map(files, file => ({
    devtool: "none",
    mode: "production",
    entry: path.resolve(__dirname, `src/main.js`),
    output: {
        filename: `${file}.min.js`,
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: "babel-loader"
            },
            {
                test: /\.(js)$/,
                loader: "string-replace-loader",
                options: {
                    flags: "g",
                    search: "LODASH_FILE",
                    replace: file
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
        })
    ]
}));
