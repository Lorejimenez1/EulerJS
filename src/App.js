import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/home';
import NavigationBar from './components/navbar';
import './App.css';

export default function App(props) {
		return (
				<Router>
						<div className="app">
								<header>
									<NavigationBar />
								</header>
								<main>
										<Route exact path="/" component={Home} />
								</main>
						</div>
				</Router>
		);
}
