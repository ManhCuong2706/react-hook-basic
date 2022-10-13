import React from 'react';
import PropTypes from 'prop-types';

JsonTab.propTypes = {};

function JsonTab(props) {
  const { tabs, dataJson, onJsonChange, type } = props;
  const handleTypeChange = (value) => {
    if (onJsonChange) onJsonChange(value);
  };
  return (
    <div>
      <h2>Json Tab</h2>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTypeChange(tab)}
          style={
            type === tab
              ? {
                  backgroundColor: 'pink',
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <ul>
        {dataJson.map((data) => (
          <li key={data.id}>{data.title || data.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default JsonTab;
