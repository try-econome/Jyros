"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$jyrosJson",
    version: "1.0.1",
    description: "Retrieves structured JSON data from the stored environment variable",
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
            name: "index",
            description: "The index of the data entry to retrieve",
            type: forgescript_1.ArgType.Number,
            required: true,
            rest: false
        }
    ],
    unwrap: true,
    execute(ctx, [name, index]) {
        const data = ctx.getEnvironmentKey(`${name}_Data`);
        const template = ctx.getEnvironmentKey(`${name}_Template`);
        const keys = ctx.getEnvironmentKey(`${name}_Keys`);
        const result = typeof template === 'object' && template !== null ?
            { ...template } : {};
        const flatKeys = Array.isArray(keys) ?
            (Array.isArray(keys[0]) ? keys[0] : keys).map(String) :
            [];
        if (Object.keys(result).length === 0 && flatKeys.length > 0) {
            flatKeys.forEach(key => {
                result[key] = "";
            });
        }
        if (Array.isArray(data) && index >= 0 && index < data.length) {
            const entry = data[index];
            const values = Array.isArray(entry) ? entry : [entry];
            flatKeys.forEach((key, i) => {
                if (i < values.length) {
                    result[key] = String(values[i]);
                }
            });
        }
        return this.success(JSON.stringify(result, null, 2));
    }
});
//# sourceMappingURL=jyrosJson.js.map