import './App.scss';
import RangeWidget from './components/range-widget/RangeWidget';

function App() {
	return (
		<div className="App d-flex flex-column align-items-center">
			<RangeWidget size={300} defaulValue={5} circleGap={80} />
			<hr />
		</div>
	);
}

export default App;
