import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'; 
import Header from './Header'
import HunterBuilder from './HunterBuilder';
import AtkspdCalc from './AtkspdCalc';
import Guide from './Guide';
import Footer from './Footer';


function App() {

	function PageTitleupdater() {
		const location = useLocation();

		useEffect(() => {
			const titles = {
				"/builder": "Builder",
				"/atkspd": "ATK SPD",
				"/guide": "Guide",
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
				<Route path='/guide' element={<Guide />} />
			</Routes>

			<Footer></Footer>
			
		</Router>
	);

}

export default App


// WB weapon reopening the modal
// some PvP line no need Percent at the end in hunterEquipment 