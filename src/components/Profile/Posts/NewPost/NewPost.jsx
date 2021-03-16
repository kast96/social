const NewPost = () => {
  return (
    <div className="new-post">
      <textarea class="new-post__input" name="new-post" cols="30" rows="10"></textarea>
      <button className="btn new-post__btn">Отправить</button>
    </div>
  );
}

export default NewPost;
