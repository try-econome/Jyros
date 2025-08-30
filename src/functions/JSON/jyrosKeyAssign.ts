import { ArgType, NativeFunction } from "@tryforge/forgescript";

export default new NativeFunction({
    name: "$jyrosKeyAssign",
    version: "1.0.0",
    description: "Assigns keys for JSON output",
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
            name: "keyNames",
            description: "Key names for data mapping",
            type: ArgType.String,
            required: true,
            rest: true
        }
    ],
    unwrap: true,
    execute(ctx, args: [string, string[]]) {
        const name = args[0];
        const keyNames = args[1];
        
        const template: Record<string, string> = {};
        for (const key of keyNames) {
            template[key] = "";
        }
        
        ctx.setEnvironmentKey(`${name}_Template`, template);
        ctx.setEnvironmentKey(`${name}_Keys`, keyNames);
        
        return this.success();
    }
});