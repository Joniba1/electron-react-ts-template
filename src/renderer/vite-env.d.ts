/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
	readonly VITE_API_URL: string
	readonly VITE_ENV: 'dev' | 'prod'
	readonly VITE_APP_VERSION: string
	readonly VITE_PORT?: string
	//* more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
