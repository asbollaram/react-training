import React from 'react';
import FunComponent from './functionComponet/FunComponent';
import ClassComponent from './classComponent/ClassComponent';
import FuntionToclassComponent from './FunctionToclassComponent';
import MethodInClass from './ClassinMethod';

function App() {
  const hi = 'Hello';
  const world = 'World';
  return (
    <div>
      <MethodInClass />
      <FuntionToclassComponent />
      <FunComponent name="Hello, React props" role="UI react props" />
      <ClassComponent />
      ----------------
      <br />
      {hi}
      <br />
      {world}
    </div>
  );
}

export default App;
