const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers(
      [
        {id: 1, fullname: 'Евгений', photo: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', status: 'Find the argus apocraphex', location: {city: 'Penaz', country: 'Russia'}, followed: true},
        {id: 2, fullname: 'Вова', photo: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', status: 'React here', location: {city: 'Minsk', country: 'Belarus'}, followed: false},
        {id: 3, fullname: 'Дима', photo: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png', status: 'Redux?', location: {city: 'Kiev', country: 'Ukraine'}, followed: true}
      ]
    );
  }

  return (
    <div className="users">
      {
        props.users.map(user => 
          <div className="user" key={user.id}>
            <div className="user__left">
              <div className="user__img">
                <img src={user.photo} alt={user.fullName}/>
              </div>
              <div className="user__subscribe">
                {(user.followed) ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
              </div>
            </div>
            <div className="user__right">
              <div className="user__name">{user.fullName}</div>
              <div className="user__status">{user.status}</div>
              <div className="user__location">{user.location.city}, {user.location.country}</div>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Users;
