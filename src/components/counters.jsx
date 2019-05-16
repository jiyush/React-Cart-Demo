import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        console.log('App - Counters');
        const { onClick, onDelete, onIncrement, onDecrement, onReset, counters} = this.props;
        return ( 
            <div>
                <button  onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>( 
                    <Counter key={counter.id} onDecrement={onDecrement} counter={counter} onIncrement={onIncrement}  onDelete={onDelete}  /> 
                    ) 
                )}
            </div>
         );
    }
}
 
export default Counters;