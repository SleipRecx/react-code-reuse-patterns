import { useEffect, useState } from "react";
import createStore from "./store";

const store = createStore(["but", "hooks", "are", "better."]);

const useStore = () => {
  const [comments, setComments] = useState(store.getState());

  useEffect(() => {
    store.addChangeListener(handleChange);
    return () => {
      store.removeChangeListener(handleChange);
    };
  }, []);

  const handleChange = () => setComments(store.getState());

  return comments;
};

export default useStore;
