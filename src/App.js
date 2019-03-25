import React from "react";
import useStore from "./hook";
import withStore from "./hoc";
import RenderWithStore from "./renderProps";
import StoreMixin from "./mixin";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";

const CommentList = ({ comments, name }) => {
  const commentList = comments.map((c, index) => <li key={index}>{c}</li>);
  return (
    <>
      <h2>{name}</h2>
      <ul>{commentList}</ul>
    </>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};

const CommentListWithHOC = withStore(CommentList);

const CommentListUsingHook = ({ name }) => {
  const comments = useStore(["Hooks", "are", "better"]);
  const commentList = comments.map((c, index) => <li key={index}>{c}</li>);
  return (
    <>
      <h2>{name}</h2>
      <ul>{commentList}</ul>
    </>
  );
};

CommentListUsingHook.propTypes = {
  name: PropTypes.string.isRequired
};

const CommentListWithMixin = createReactClass({
  mixins: [StoreMixin],
  render: function() {
    return <CommentList {...this.state} {...this.props} />;
  }
});

const App = () => (
  <div className="App">
    <center>
      <React.StrictMode>
        <CommentListWithMixin name="Eddern" />
        <CommentListWithHOC name="Corry" />
        <RenderWithStore>
          {props => <CommentList name="Espen" {...props} />}
        </RenderWithStore>
        <CommentListUsingHook name="Markus" />
      </React.StrictMode>
    </center>
  </div>
);

export default App;
