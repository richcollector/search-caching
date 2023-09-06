import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const SearchPage = lazy(() => import('./pages/Search'));

function App() {
	return (
		<>
			<Suspense fallback={'Loading...'}>
				<Routes>
					<Route path={'/'}>
						<Route index element={<SearchPage />} />
					</Route>
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
