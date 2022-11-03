import React from 'react';
function FunComponent(props) {
  return (
    <div>
      <h2>Funcation Component</h2>
      <div>
        <h3>{props.name}</h3>

        <h6>{props.role}</h6>
      </div>
    </div>
  );
}

export default FunComponent;
