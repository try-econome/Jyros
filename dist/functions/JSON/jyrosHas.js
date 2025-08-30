"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$jyrosHas",
    version: "1.1.5",
    description: "Returns whether a nested key path exists in a JSON object",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "variable",
            description: "The environment variable that holds JSON",
            required: true,
            type: forgescript_1.ArgType.String,
            rest: false
        },
        {
            name: "keys",
            description: "The key path to check (supports nested JSON)",
            required: true,
            type: forgescript_1.ArgType.String,
            rest: true
        }
    ],
    output: forgescript_1.ArgType.Boolean,
    execute(ctx, args) {
        const [name, keys] = args;
        const json = ctx.getEnvironmentKey(name);
        if (typeof json !== "object" || json === null) {
            return this.success(false);
        }
        let current = json;
        for (const key of keys) {
            if (current &&
                typeof current === "object" &&
                Object.prototype.hasOwnProperty.call(current, key)) {
                current = current[key];
            }
            else {
                return this.success(false);
            }
        }
        return this.success(true);
    }
});
//# sourceMappingURL=jyrosHas.js.map