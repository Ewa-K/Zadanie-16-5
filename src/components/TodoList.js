import React from 'react';

import Todo from './Todo';

const TodoList = props => (
	<div>
		{props.list.map((el, index) => (
			<Todo
				key={index}
				name={el.text}
				clickHandler={() => props.removeTodoHandler(el.id)}
			/>
		))}
	</div>
)


export default TodoList;