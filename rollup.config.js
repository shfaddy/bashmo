import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {

input: 'shell.mjs',
output: {

dir: 'bin',
format: 'cjs'

},
plugins: [ nodeResolve () ]

};
