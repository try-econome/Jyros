"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$jyrosKeyAssign",
    version: "1.0.0",
    description: "Assigns keys for JSON output",
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
            name: "keyNames",
            description: "Key names for data mapping",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: true
        }
    ],
    unwrap: true,
    execute(ctx, args) {
        const name = args[0];
        const keyNames = args[1];
        const template = {};
        for (const key of keyNames) {
            template[key] = "";
        }
        ctx.setEnvironmentKey(`${name}_Template`, template);
        ctx.setEnvironmentKey(`${name}_Keys`, keyNames);
        return this.success();
    }
});
//# sourceMappingURL=jyrosKeyAssign.js.map