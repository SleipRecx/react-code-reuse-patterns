import createStore from "./store";
const store = createStore(["mixins", "sucks"]);

const StoreMixin = {
  getInitialState: () => {
    return {
      comments: store.getState()
    };
  },
  componentDidMount: function() {
    store.addChangeListener(this.handleChange);
  },

  componentWillUnmount: function() {
    store.removeChangeListener(this.handleChange);
  },

  handleChange: function() {
    this.setState({
      comments: store.getState()
    });
  }
};

export default StoreMixin;
