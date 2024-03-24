import { useContext } from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { PostConstruct } from "../store/Postprovider";

export const Post = ({ post }) => {
  const { deletePost } = useContext(PostConstruct);

  return (
    <div className="card post-card">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-button">
        <RiChatDeleteFill onClick={()=>deletePost(post.id)} key={post.id}/>
        <span className="visually-hidden">unread messages</span>
      </span>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tags">{tag}</span>
        ))}
        <div className="alert alert-success alert-tab" role="alert">
          This Post has been Reacted by {post.reaction} People
        </div>
      </div>
    </div>
  );
};
