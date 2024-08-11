import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/MyCustomLitElement.js', // Your entry file
	output: {
		file: 'dist/MyCustomLitElement.js',
		format: 'cjs', // or 'iife', 'cjs', etc., depending on your needs
	},
	plugins: [
		resolve(), // Resolve modules from node_modules
		babel(),
		commonjs(), // Convert CommonJS modules to ES6
	],
};
