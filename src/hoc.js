import React, { Component } from "react";
import createStore from "./store";

const store = createStore(["HOC's", "are", "nice,"]);

const withStore = WrappedComponent => {
  return class Subscription extends Component {
    state = {
      comments: store.getState()
    };

    componentDidMount() {
      store.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
      store.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
      this.setState({
        comments: store.getState()
      });
    };

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withStore;
