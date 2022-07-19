import React, { Component } from "react";
import Cardlist from "./container/Cardlist";
import Searchbox from "./container/Searchbox";
import Scroll from "./container/Scroll"
import './components/App.css'
class App extends Component {
    constructor() {
        super ()
        this.state = {
            robots: [] ,
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch ( 'https://jsonplaceholder.typicode.com/users' )
        .then (Response => Response.json())
        .then(users=>this.setState({robots: users}));
    }
    onSerachChange = (event) =>{
        this.setState({searchfield: event.target.value })
    }
    render() {
        const {robots , searchfield}= this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (robots.length===0)
        {
            return <h1 className="tc">LOADING</h1>
        }
        else{

            return ( 
                <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <Searchbox searchChange={this.state.onSearchChange}/>
            <Scroll>
            <Cardlist robots={filteredRobots}/>
            </Scroll>
             </div>
        );
    }
    }
}

export default App;