import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    //   Prevent reloading when submit
    e.preventDefault();
    if (!onSubmit) return;

    const formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue('');
  };

  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>Todo Form</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleValueChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
