import React from 'react';
// import { FaPlusSquare } from 'react-icons/fa';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, filteredTodos }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { text: inputText, completed: false, id: `ID_${Date.now() * 10}asdw` }]);
		setInputText('');
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
	};

	return (
		<form>
			<input
				type='text'
				value={inputText}
				autoFocus
				className='todo-input'
				onChange={inputTextHandler}
			/>
			<button className='todo-button' type='submit' onClick={submitTodoHandler}>
				<i className='fas fa-plus-square'></i>
				{/* <FaPlusSquare /> */}
			</button>
			<div className='select'>
				<select onChange={statusHandler} name='todos' className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
