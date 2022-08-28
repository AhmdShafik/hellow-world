import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went Wrong!",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingOne() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: null });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" :<div> <span>{state.post.title}</span><br/><code>Body : </code>{state.post.body}</div> }
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingOne;
