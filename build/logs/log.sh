fastify  | 
fastify  | > fastify@1.0.0 dev
fastify  | > tsx watch src/server.ts
fastify  | 
fastify  | 
fastify  | node:internal/modules/run_main:123
fastify  |     triggerUncaughtException(
fastify  |     ^
fastify  | Error: Cannot find package '/app/node_modules/@types/ejs/' imported from /app/src/server.ts
fastify  |     at legacyMainResolve (node:internal/modules/esm/resolve:215:26)
fastify  |     at packageResolve (node:internal/modules/esm/resolve:860:14)
fastify  |     at moduleResolve (node:internal/modules/esm/resolve:946:18)
fastify  |     at defaultResolve (node:internal/modules/esm/resolve:1188:11)
fastify  |     at nextResolve (node:internal/modules/esm/hooks:864:28)
fastify  |     at resolveBase (file:///usr/local/lib/node_modules/tsx/dist/esm/index.mjs?1742220856212:2:3212)
fastify  |     at resolveDirectory (file:///usr/local/lib/node_modules/tsx/dist/esm/index.mjs?1742220856212:2:3584)
fastify  |     at resolveTsPaths (file:///usr/local/lib/node_modules/tsx/dist/esm/index.mjs?1742220856212:2:4073)
fastify  |     at resolve (file:///usr/local/lib/node_modules/tsx/dist/esm/index.mjs?1742220856212:2:4447)
fastify  |     at nextResolve (node:internal/modules/esm/hooks:864:28) {
fastify  |   code: 'ERR_MODULE_NOT_FOUND'
fastify  | }
fastify  | 
fastify  | Node.js v20.19.0
