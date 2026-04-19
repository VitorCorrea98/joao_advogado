import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CannabisLaw } from './pages/CannabisLaw';
import { Home } from './pages/Home';
import { IntellectualProperty } from './pages/IntellectualProperty';
import { LaborLaw } from './pages/LaborLaw';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="trabalhista" element={<LaborLaw />} />
					<Route path="canabico" element={<CannabisLaw />} />
					<Route path="autoral" element={<IntellectualProperty />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;