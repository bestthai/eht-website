import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'; 
import Header from './components/Header';
import HunterBuilder from './components/Builder/HunterBuilder';
import Guide from './components/Guide/Guide';
import Footer from './components/Footer';

import CalculatorPage from './components/Calculator/CalculatorPage';
import AtkspdCalc from './components/Calculator/AtkspdCalc';
import MovementCalc from './components/Calculator/MovementCalc';

function App() {
	function PageTitleupdater() {
		const location = useLocation();

		useEffect(() => {
		const titles = {
			"/builder": "Builder",
			"/calculator": "Calculator",
			"/atkspd": "ATK SPD Calculator",
			"/movement": "Movement Calculator",
			"/guide": "Guide",
		};

		document.title = titles[location.pathname] || "Home";
		}, [location.pathname]);

		return null;
	}

	return (
		<Router>
			<Header />

			<PageTitleupdater />

			<Routes>
				<Route path='/builder' element={<HunterBuilder />} />

				<Route path='/calculator' element={<CalculatorPage />} />
				<Route path='/calculator/atkspd' element={<AtkspdCalc />} />
				<Route path='/calculator/movement' element={<MovementCalc />} />
				
				<Route path='/guide/*' element={<Guide />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
