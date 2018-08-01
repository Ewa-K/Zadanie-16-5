import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	value: ''
        }

        this.changeInputHandler = this.changeInputHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeInputHandler(event) {
    	this.setState({value:event.target.value})
    }

    submitHandler(e) {
    	e.preventDefault();
    	this.props.submitHandler(this.state.value)
    }

    render() {
    	return (
    		<form onSubmit={() => this.props.submitHandler(this.state.value)}>
    			<input 
    				type="text"
    				value={this.state.value}
    				onChange={this.changeInputHandler}
    			/>
    		</form>
    	);
    }
}

export default TodoForm;