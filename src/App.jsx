import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'; 
import Header from './Header';
import HunterBuilder from './HunterBuilder';
import Guide from './Guide';
import Footer from './Footer';

import CalculatorPage from './CalculatorPage';
import AtkspdCalc from './AtkspdCalc';
import MovementCalc from './MovementCalc';

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
				<Route path='/atkspd' element={<AtkspdCalc />} />
				<Route path='/movement' element={<MovementCalc />} />
				<Route path='/guide' element={<Guide />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
