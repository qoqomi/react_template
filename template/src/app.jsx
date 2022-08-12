import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Habits from './components/habits';
import Add from './components/add';
import Reset from './components/reset';
class App extends Component {
      state = {
        habits: [
            {id: 0, name: "Reading",count: 0},
            {id: 1,name: "Running", count: 0},
            {id: 2,name: "Coding", count: 0}
        ]
    }
    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        //habit callback funtion
        const index = habits.indexOf(habit);
        //Object를 update하는 것과 동일하다.
        habits[index].count++;
        //this.setState({habits:habits});
        //key와 value의 값이 같다면 생략할 수 있다. 
        this.setState({habits});
    }

    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count -1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits});
    }
    
    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id)
        this.setState({habits});
    }


  render() {
    return (
      <>
        <Header totalCount={this.state.habits.filter(item=>item.count >0).length } />
     
        <Habits habits={this.state.habits}
habit={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} />
      <Reset/>
      </>

    );
  }
}

export default App;
