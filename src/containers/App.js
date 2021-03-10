import React,  { Component }from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import {setSearchField, requestRobots} from '../actions'

const mapStateToProps = state => {
	return {
		searchField : state.searchRobots.searchField,
		robots : state.requestRobots.robots,
		inPending : state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component  {
	componentDidMount() {
		this.props.onRequestRobots();
	}
/*
PROPS - Never change, always inputs that we get, but we never modifide them
STATE - Means the description of yoor app, a state is an object that describes you application
CHILDREN - Using props.children we can creaate components that wrap other components (Custon components)
*/
	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'> RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots = {filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		); 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
