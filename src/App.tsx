import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyles } from './utils/styles/GlobalStyles';

const SearchPage = lazy(() => import('./pages/Search'));

function App() {
	return (
		<>
			<Global styles={globalStyles} />
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
