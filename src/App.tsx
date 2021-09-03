// react
import { useState } from 'react';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// components
import Header from './components/Header';
import DurumContent from './components/DurumContent';
import SettingsMenu from './components/SettingsMenu';

// options
import { defaultDurumCost } from './config/options';


function App() {

	const [durumCost, setDurumCost] = useState(defaultDurumCost);
	const [isSettingsVisible, setIsSettingsVisible] = useState(false);

	return (
		<Container>
			<Header isSettingsVisible={isSettingsVisible} setIsSettingsVisible={setIsSettingsVisible} />

			<DurumContent durumCost={durumCost} />

			{isSettingsVisible && <SettingsMenu durumCost={durumCost} setDurumCost={setDurumCost} />}
		</Container>
	);
}

export default App;
