import './App.scss';
import RangeWidget from './components/range-widget/RangeWidget';
import ScaleWidget from './components/scale-widget/ScaleWidget';

function App() {
	return (
		<div className="App d-flex flex-column align-items-center">
			<RangeWidget size={300} defaulValue={5} circleGap={80} />
			<hr />
			<ScaleWidget defaulValue={2} />
		</div>
	);
}

export default App;
