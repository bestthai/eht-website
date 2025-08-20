import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'
import HunterBuilder from './HunterBuilder';
import AtkspdCalc from './AtkspdCalc';
import Footer from './Footer';


function App() {
  
	return(
		<Router>
			<Header></Header>

			<Routes>
				<Route path='/builder' element={<HunterBuilder />} />
				<Route path='/atkspd' element={<AtkspdCalc />} />
			</Routes>

			<Footer></Footer>
			
		</Router>
	);

}

export default App

    // TODO: fix the modal type to have the same lenght as the gear line
	// TODO: add my name in the footer card
