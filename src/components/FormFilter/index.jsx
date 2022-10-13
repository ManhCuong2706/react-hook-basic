import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

FormFilter.propTypes = {
  onSubmit: PropTypes.func,
};

FormFilter.defaultProps = {
  onSubmit: null,
};

function FormFilter(props) {
  const { onSubmit } = props;
  const [formValue, setFormValue] = useState('');

  function handleFormChange(e) {
    setFormValue(e.target.value);
    if (onSubmit) onSubmit(formValue);
  }

  return (
    <form>
      <input type='text' value={formValue} onChange={handleFormChange} />
    </form>
  );
}

export default FormFilter;
