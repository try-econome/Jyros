"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$jyrosToKey",
    version: "1.1.0",
    description: "Stores JSON data into environment keys for later retrieval",
    brackets: true,
    args: [
        {
            name: "name",
            description: "The environment variable name",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "json",
            description: "The JSON data to store",
            type: forgescript_1.ArgType.Json,
            required: true,
            rest: false
        },
        {
            name: "separator",
            description: "The separator to use between keys (default is no separator)",
            type: forgescript_1.ArgType.String,
            required: false,
            rest: false
        }
    ],
    unwrap: true,
    execute(ctx, [name, json, separator]) {
        if (typeof json !== "object" || Array.isArray(json) || json === null) {
            return this.customError("JSON must be a valid object.");
        }
        const keys = Object.keys(json);
        const values = Object.values(json).map(v => String(v));
        if (separator) {
            ctx.setEnvironmentKey(`${name}_Keys`, keys.join(separator));
        }
        else {
            ctx.setEnvironmentKey(`${name}_Keys`, JSON.stringify(keys));
        }
        ctx.setEnvironmentKey(`${name}_Data`, JSON.stringify([values]));
        return this.success();
    },
});
//# sourceMappingURL=jyrosToKeys.js.map