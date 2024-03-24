import { createContext, useReducer } from "react";

export const PostConstruct = createContext({
  postItems: [],
  addPost: () => {},
  deletePost: () => {},
}); // whatever the value we will pass here , that can be used as auto-complete variable and also can be used in other hooks

const reducer = (currenVal, action) => {
  let newPostVal = currenVal;
  if (action.type === "DELETE_POST") {
    newPostVal = currenVal.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostVal = [action.payload, ...currenVal];
  }
  return newPostVal;
};

export const PostContext = (props) => {
  const [postItems, dispatchPostIems] = useReducer(
    reducer,
    defaultPostTemplate
  );

  const addPost = (userId, title, content, reactions, tags) => {
    dispatchPostIems({
      type: "ADD_POST",
      payload: {
        id: Math.round(Math.random() * 100),
        title: title,
        body: content,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostIems({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <PostConstruct.Provider value={{ postItems, addPost, deletePost }}>
      {props.children}
    </PostConstruct.Provider>
  );
};

const defaultPostTemplate = [
  {
    id: "1",
    title: "Summer Vacation",
    body: "Bahut maja aya chutti me",
    reaction: 4,
    userId: "user1",
    tags: ["#beach", "#mastitime"],
  },
  {
    id: "2",
    title: "convocation",
    body: "Finally Engineer ban hi gaye bhai",
    reaction: 15,
    userId: "user2",
    tags: ["#Engineer", "#convocation", "#Graduated"],
  },
];
