import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from '@/pages/Layout'
import Home from '@/pages/Home'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 1000 * 60 * 30, //* 30 minutes
		},
	},
})

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="home" element={<Home />} />
				</Route>{' '}
			</Routes>
		</QueryClientProvider>
	)
}

export default App
