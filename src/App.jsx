import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'; 
import Header from './Header'
import HunterBuilder from './HunterBuilder';
import AtkspdCalc from './AtkspdCalc';
import Footer from './Footer';


function App() {

	function PageTitleupdater() {
		const location = useLocation();

		useEffect(() => {
			const titles = {
				"/builder": "Builder",
				"/atkspd": "ATK SPD",
				"/index": "Index"
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

			</Routes>

			<Footer></Footer>
			
		</Router>
	);

}

export default App

// fixed all of the atk spd 
