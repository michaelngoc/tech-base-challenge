import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import HomePage from 'pages/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<main className="page-main w-100">
					<Switch>
						<Route exact path="/" component={HomePage} />
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
