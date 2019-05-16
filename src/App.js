import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
    state = { 
        counters: [
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    }
    constructor(){
        super();
        console.log('App - Constructed');
    }
    componentDidMount(){
        console.log('App - Mounted');
    }
    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({
            counters
        });
    }
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({
            counters
        });
    }
    handleDelete = (counterId) => {
        // console.log('Event:-', counterId)
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters
        })
    }
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({
            counters
        })
    }

    render() { 
        console.log('App - Rendered');
        return (
        <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
            <Counters onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} counters={this.state.counters} onDelete={this.handleDelete} onReset={this.handleReset} />
        </main>
        </React.Fragment>
        );
    }
}
 
export default App;
