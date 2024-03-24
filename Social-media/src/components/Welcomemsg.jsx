export const Welcomemsg = ({addInitialPosts}) => {
  return (
    <div className="Welcomemsg">
      <h1>Create New Post or Fetch Post</h1>
      <button type="button" className="btn btn-outline-success" onClick={addInitialPosts}>
        Fetch post from Server
      </button>
    </div>
  );
};
