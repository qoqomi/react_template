import React, { Component } from 'react';
import Habit from './habit';
import Add from './add';
class Habits extends Component {

    handleIncrement = (habit) => {
       this.props.onIncrement(habit)
    }

    handleDecrement = (habit) => {
      this.props.onDecrement(habit)
    }
    
    handleDelete = (habit) => {
      this.props.onDelete(habit)
    }
    
    render() {
    
      return (
        <>
          <Add/>
            {
              this.props.habits.map((habit) => {
                return <Habit key={habit.id}
                              habit={habit}
                              onIncrement={this.handleIncrement}
                              onDecrement={this.handleDecrement}
                              onDelete={this.handleDelete}/>
            })
            }
        </>
        
            
        );
    }
}

export default Habits;