import React from 'react';
import ReactDOM from 'react-dom';

import {SubComponent} from './sub';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello React!</h1>
				<SubComponent name="My Counter for Babel" />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.app'));
