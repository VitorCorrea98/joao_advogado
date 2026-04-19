import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { LaborLaw } from './pages/LaborLaw';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="trabalhista" element={<LaborLaw />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;