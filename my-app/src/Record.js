import React from 'react';
import './Record.css';


function Record(props) {
  return (
    <div className="my-record">
      { props.children }
    </div>
  );
}

export default Record;
