import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList.js';
import Scroll from '../components/scrollBox';
import SearchBox from '../components/SearchBox';
import ErrorCatch from '../components/ErrorBoundary.js';
import './App.css';
import 'tachyons';

function App () {
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: [],
    //         SearchField : ''
    //     }
    // }

    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')
    const [count, setCount] = useState(0)
    
    // componentDidMount(){
    //     fetch('http://jsonplaceholder.typicode.com/users')
    //     .then(responses => {
    //         return responses.json();
    //     })
    //     .then(users => {
    //         this.setState({robots:users})
    //     })
    // }

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(responses => {
                return responses.json();
            })
            .then(users => {
                setRobots(users)
            })
            console.log(count)
    }, [count]) // Only runs if count changes


    const OnSearchChange = (event) => {
        setSearchField(event.target.value)     
    }


        const filteredRobots = robots.filter( robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })

        console.log(robots.length); 

        if (robots.length === 0){
            return <h1>Loading...</h1>
        }   else{
                return(
                    <div className = 'tc'>
                        <h1 className = "f1">Robofriends</h1>    
                        <button onClick={() => setCount(count+1)}>Click me!</button>                    
                        <SearchBox SearchChange = {OnSearchChange}/>
                        <Scroll>
                            <ErrorCatch>
                                <CardList robots = {filteredRobots}/>
                            </ErrorCatch>    
                        </Scroll>
                    </div>
                )
            }    
    }

export default App;