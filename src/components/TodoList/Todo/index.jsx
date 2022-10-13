import PropTypes from 'prop-types';
import React from 'react';
import TodoList from '../TodoItem';

Todo.propTypes = {
  todoArray: PropTypes.array,
  onTodoClick: PropTypes.func,
};

Todo.defaultProps = {
  todoArray: [],
  onTodoClick: null,
};

function Todo(props) {
  const { todoArray, onTodoClick } = props;

  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todoList={todoArray} onTodoClick={onTodoClick} />
    </div>
  );
}

export default Todo;
