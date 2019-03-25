import React from "react";
import useStore from "./hook";
import withStore from "./hoc";
import RenderWithStore from "./renderProps";

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
      <React.StrictMode>
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
