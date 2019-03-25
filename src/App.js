import React from "react";
import useStore from "./hook";
import withStore from "./hoc";

const CommentList = ({ comments, name }) => {
  const commentList = comments.map((c, index) => <li key={index}>{c}</li>);
  return (
    <>
      <h2>{name}</h2>
      <ul>{commentList}</ul>
    </>
  );
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

const App = () => (
  <div className="App">
    <center>
      <CommentListWithHOC name="Corry" />
      <CommentListUsingHook name="Markus" />
    </center>
  </div>
);

export default App;
