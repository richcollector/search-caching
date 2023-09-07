import { Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { globalStyles } from './utils/styles/GlobalStyles';
import { ROUTES } from './utils/constants/constants';
import SearchPage from './pages/Search';

function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<Routes>
				<Route path={ROUTES.MAIN}>
					<Route index element={<SearchPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
