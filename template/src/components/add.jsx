import React, { Component,useRef } from 'react';

class Add extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.inputRef.current.value)
    }
    render() {
        return (
            <form className='add-div' onSubmit={this.onSubmit}>
            <input type="text" className="add-input" placeholder="습관을 입력해주세요" ref={this.inputRef}></input>
            <button>click</button>    
            </form>
        );
    }
}

export default Add;