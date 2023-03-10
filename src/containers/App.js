import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import Scroll from '../components/scrollBox';
import SearchBox from '../components/SearchBox';
import ErrorCatch from '../components/ErrorBoundary.js';
import './App.css';
import 'tachyons';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            SearchField : ''
        }
    }
    
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(responses => {
            return responses.json();
        })
        .then(users => {
            this.setState({robots:users})
        })
    }

    OnSearchChange = (event) => {
        this.setState({SearchField : event.target.value})     
    }

    render(){
        const filteredRobots = this.state.robots.filter( robots => {
            return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
        })

        console.log(this.state.robots.length);

        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }   else{
                return(
                    <div className = 'tc'>
                        <h1 className = "f1">Robofriends</h1>                        
                        <SearchBox SearchChange = {this.OnSearchChange}/>
                        <Scroll>
                            <ErrorCatch>
                                <CardList robots = {filteredRobots}/>
                            </ErrorCatch>    
                        </Scroll>
                    </div>
                )
            }    
    }
}

export default App;