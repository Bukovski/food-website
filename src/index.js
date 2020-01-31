import React from 'react';
import ReactDOM from 'react-dom';
import { Lines } from 'react-preloaders';
import { Main } from './containers/main';
import "./resources/style/main.sass"


function App() {
  return (
    <React.Fragment>
      <Main />
      <Lines
        color="#cc9900"
        background="#4c4c4c"
      />
    </React.Fragment>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));


