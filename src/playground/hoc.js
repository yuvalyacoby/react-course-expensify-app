// Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The Info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthernticated ? <p>You are allowed to see this</p> : <p>Please log in to view this content</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthernticated={true} info="This are the details" />, document.getElementById('app'))
