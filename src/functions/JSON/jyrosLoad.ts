import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
    name: "$jyrosLoad",
    version: "1.0.0",
    description: "Loads data with specified delimiters",
    brackets: true,
    args: [
        {
            name: "name",
            description: "The environment variable name",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "rowDelimiter",
            description: "Delimiter between rows",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "colDelimiter",
            description: "Delimiter between columns",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "data",
            description: "The data to parse",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    unwrap: true,
    execute(ctx, [name, rowDelimiter, colDelimiter, data]: [string, string, string, string]) {

        const rows = data.split(rowDelimiter);
        const parsedData = rows.map(row => row.split(colDelimiter));
        
        ctx.setEnvironmentKey(`${name}_Data`, parsedData);
        
        return this.success();
    }
});