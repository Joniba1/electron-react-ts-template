import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin, loadEnv } from 'electron-vite'
import { resolve } from 'path'
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'
import { Plugin } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig((env) => {
	process.env = { ...process.env, ...loadEnv(env.mode, process.cwd()) }

	const electronEnv = {
		//* Define environment variables to be used in Electron main and preload scripts
		//* Example: 'process.env.KEY': JSON.stringify(process.env.KEY)
	}

	return {
		main: {
			plugins: [externalizeDepsPlugin(), tsconfigPaths()],
			define: electronEnv,
			build: {
				lib: {
					entry: resolve(__dirname, 'src/electron/main.ts'),
				},
			},
		},
		preload: {
			plugins: [externalizeDepsPlugin(), tsconfigPaths()],
			define: electronEnv,
			build: {
				lib: {
					entry: resolve(__dirname, 'src/electron/preload.ts'),
				},
			},
		},
		renderer: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: `@use "@/variables" as *;`,
					},
				},
			},
			server: {
				host: true,
				port: process.env.VITE_PORT ? +process.env.VITE_PORT : undefined,
			},
			resolve: {
				alias: {
					'@': resolve(__dirname, 'src/renderer'),
				},
			},
			plugins: [react(), tsconfigPaths(), reactScopedCssPlugin() as unknown as Plugin, svgr()],
		},
	}
})
