import { Post } from "./Post";
import { PostConstruct } from "../store/Postprovider";
import { useContext } from "react";


export const PostList = () => {

  const { postItems } = useContext(PostConstruct);

  return (
    <>
      {postItems.map((template) => (
        <Post key={template.id} post={template}/>
      ))}
    </>
  );
};
