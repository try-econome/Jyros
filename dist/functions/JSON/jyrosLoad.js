"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
exports.default = new forgescript_1.NativeFunction({
    name: "$jyrosLoad",
    version: "1.0.0",
    description: "Loads data with specified delimiters",
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
            name: "rowDelimiter",
            description: "Delimiter between rows",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "colDelimiter",
            description: "Delimiter between columns",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "data",
            description: "The data to parse",
            type: forgescript_1.ArgType.String,
            required: true,
            rest: false
        }
    ],
    unwrap: true,
    execute(ctx, [name, rowDelimiter, colDelimiter, data]) {
        const rows = data.split(rowDelimiter);
        const parsedData = rows.map(row => row.split(colDelimiter));
        ctx.setEnvironmentKey(`${name}_Data`, parsedData);
        return this.success();
    }
});
//# sourceMappingURL=jyrosLoad.js.map