import { Component } from 'react';
import UserNotFound from '../userNotFound/userNotFound';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <UserNotFound />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
