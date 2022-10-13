import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';

import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import Todo from './components/TodoList/Todo';
import queryString from 'query-string';
import FormFilter from './components/FormFilter';
import JsonTab from './components/JsonTab/JsonTab';

function App() {
  const todoArr = [
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ];

  const tabs = ['posts', 'comments', 'albums'];

  // Set state
  const [todoList, setTodoList] = useState(todoArr);
  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  });

  const [dataJson, setDataJson] = useState([]);
  const [type, setType] = useState('posts');

  // Side effects

  useEffect(() => {
    async function fetchData() {
      try {
        const paramString = queryString.stringify(filter);
        const responseURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(responseURL);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;

        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail fetch data: ' + error.message);
      }
    }
    fetchData();
  }, [filter]);

  useEffect(() => {
    async function fetchJson() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        const resJSON = await res.json();
        setDataJson(resJSON);
      } catch (error) {
        console.log('Something went wrong' + error.message);
      }
    }
    fetchJson();
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  // Handler function

  const handleTodoClick = (todo, i) => {
    console.log(todo, i);
    const newTodo = [...todoList];
    newTodo.splice(i, 1);
    setTodoList(newTodo);
  };

  const handleTodoFormSubmit = (formValue) => {
    console.log(formValue);
    const newForm = {
      id: todoList.length + 1,
      ...formValue,
    };
    console.log(newForm);
    const newTodoList = [...todoList];
    newTodoList.push(newForm);
    setTodoList(newTodoList);
    console.log(todoList);
  };

  const handlePagination = (newPage) => {
    console.log(newPage);
    setFilter(() => {
      return { ...filter, _page: newPage };
    });
  };

  const handleJsonChange = (value) => {
    setType(value);
  };

  return (
    <div className='app'>
      <h1>Welcome to React Hooks!</h1>
      <ColorBox />
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <Todo todoArray={todoList} onTodoClick={handleTodoClick} />
      <FormFilter />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePagination} />
      <JsonTab
        tabs={tabs}
        dataJson={dataJson}
        onJsonChange={handleJsonChange}
        type={type}
      />
    </div>
  );
}

export default App;
