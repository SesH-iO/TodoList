import React, { useState, useEffect } from 'react';

import './App.css';

import Form from './components/form';
import TodoList from './components/todoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);

	/**
	 * * UseEffect => When there is an empty array it means the function runs only once, when the component first rendered.
	 * * When there is a value in the array, the useEffect monitors for state changes and run the function in every state change.
	 */

	useEffect(() => {
		getTodosLocal();
	}, []);

	useEffect(() => {
		fliterHandler();
		setTodosLocal();
	}, [todos, status]);

	const fliterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;

			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;

			default:
				setFilteredTodos(todos);
				break;
		}
	};

	const setTodosLocal = () => localStorage.setItem('todos', JSON.stringify(todos));

	const getTodosLocal = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let getTodo = JSON.parse(localStorage.getItem('todos'));
			setTodos(getTodo);
		}
	};

	return (
		<div className='App'>
			<header>
				<h1>Todo List!</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus}
			/>
			<TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
		</div>
	);
}

export default App;
