import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError({ message }) {
    return { hasError: true, errorMessage: message };
  }


  render() {
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>{errorMessage}</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
