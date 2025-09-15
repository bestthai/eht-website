import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'; 
import Header from './Header'
import HunterBuilder from './HunterBuilder';
import AtkspdCalc from './AtkspdCalc';
import Guide from './Guide';
import Footer from './Footer';
import MovementCalc from './MovementCalc';


function App() {

	function PageTitleupdater() {
		const location = useLocation();

		useEffect(() => {
			const titles = {
				"/builder": "Builder",
				"/atkspd": "ATK SPD",
				"/guide": "Guide",
				"/movement": "Movement SPD"
			};

			document.title = titles[location.pathname] || "Home";
		}, [location.pathname])

		return null;
	}
  
	return(
		<Router>
			<Header></Header>

			<PageTitleupdater></PageTitleupdater>

			<Routes>
				<Route path='/builder' element={<HunterBuilder />} />
				<Route path='/atkspd' element={<AtkspdCalc />} />
				<Route path='/movement' element={<MovementCalc />} />
				<Route path='/guide' element={<Guide />} />
			</Routes>

			<Footer></Footer>
			
		</Router>
	);

}

export default App

