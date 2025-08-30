import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
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
            type: ArgType.String,
            rest: false
        },
        {
            name: "keys",
            description: "The key path to check (supports nested JSON)",
            required: true,
            type: ArgType.String,
            rest: true
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, args: [string, string[]]) {
        const [name, keys] = args;
        const json = ctx.getEnvironmentKey(name);

        if (typeof json !== "object" || json === null) {
            return this.success(false);
        }

        let current: any = json;

        for (const key of keys) {
            if (
                current &&
                typeof current === "object" &&
                Object.prototype.hasOwnProperty.call(current, key)
            ) {
                current = current[key];
            } else {
                return this.success(false);
            }
        }

        return this.success(true);
    }
});
