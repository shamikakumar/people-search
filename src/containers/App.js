import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends  Component {
    constructor()
    {   
        super();
        this.state = {
            people:[],
            searchfield:''
    
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>
            response.json())
        .then(users=>
            this.setState({people:users})
        );
    }

    onSearchChange = (event) =>{
            this.setState({searchfield : event.target.value})
    }

    render(){
        const {people,searchfield} = this.state;
        const filteredPeople = people.filter( person =>{
        return person.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">People Search</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList people={filteredPeople}/>
                </Scroll>
            </div>
         );
    }
}

export default App;