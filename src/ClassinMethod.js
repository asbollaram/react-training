import React from 'react';

class MethodInClass extends React.Component {
  /// method function
  // getMove = (name,role) => {
  //     return <Cardbox name={name} role={role}/>
  // }
  render() {
    return (
      <div
        style={{ border: '1px solid #eee', padding: '10px', margin: '10px' }}
      >
        <h2>Hello Method in class</h2>
      </div>
    );
  }
}

export default MethodInClass;
