import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  const handleTodoClick = (todo, idx) => {
    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  };
  return (
    <ul className='todo-list'>
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          onClick={() => {
            handleTodoClick(todo, idx);
          }}
          className='todo-list-item'
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
