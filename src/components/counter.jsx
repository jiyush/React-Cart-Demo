import React, { Component } from "react";

class Counter extends Component {
  
  render() {
    console.log('App - Counter');
  
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>
            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
            </td>
            <td>
              <button
                onClick={() =>  this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2"
              >
                Add
              </button>
            </td>
            <td>
              <button
                onClick={() =>  this.props.onDecrement(this.props.counter)}
                className="btn btn-secondary btn-sm m-2" disabled={this.returnBool()} >
                Sub
              </button>
              
            </td>
            <td>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                Delete
                </button>
            </td>
          </tr>
          </tbody>
        </table>
        
        
        
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  returnBool(){
    const { value: Count } = this.props.counter;
    return Count === 0 ? true : false;
  }
  formateCount() {
    const { value: Count } = this.props.counter;
    return Count === 0 ? "Zero" : Count;
  }
}

export default Counter;
