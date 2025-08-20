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
