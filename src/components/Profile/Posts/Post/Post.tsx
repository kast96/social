type PropesType = {
  message: string
}

const Post: React.FC<PropesType> = ({message}) => {
  return (
    <div className="post">
      {message}
    </div>
  );
}

export default Post;
