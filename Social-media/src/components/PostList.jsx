import { Post } from "./Post";
import { PostConstruct } from "../store/Postprovider";
import { useContext } from "react";
import { Welcomemsg } from "./Welcomemsg";

export const PostList = () => {
  const { postItems, addInitialPosts } = useContext(PostConstruct);

  const hadleOnFetchClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postItems.length === 0 && (
        <Welcomemsg addInitialPosts={hadleOnFetchClick} />
      )}
      {postItems.map((template) => (
        <Post key={template.id} post={template} />
      ))}
    </>
  );
};
