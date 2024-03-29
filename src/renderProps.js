import { Component } from "react";
import createStore from "./store";
import PropTypes from "prop-types";

const store = createStore(["render props", "are", "great,"]);

export default class renderWithStore extends Component {
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
    return this.props.children(this.state);
  }
}

renderWithStore.prototypes = {
  children: PropTypes.func.isRequired
};
