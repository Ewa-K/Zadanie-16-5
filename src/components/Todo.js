import React from 'react';

const Todo = props => (
	<div onClick={props.clickHandler}>
		{props.name}
	</div>
)

export default Todo;