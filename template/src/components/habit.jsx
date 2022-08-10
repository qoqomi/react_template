import React, { Component } from 'react';

class Habit extends Component {

    handleIncrement = () => {
       
    }
    handleDecrement = () => {
  
    } 
    handleDelete = () => {
  
    } 
    render() {
        const { name, count } = this.props.habit;
        return (
        <li className='habit'>
                <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button increase" onClick={this.handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
      <button className="habit-button decrease" onClick={this.handleDecrement}>
        <i className='fas fa-minus-square'></i>
      </button>
      <button className="habit-button delete" onClick={this.handleDelete}>
         <i className='fas fa-trash '></i>
      </button>
    </li>
        );
    }
}

export default Habit;