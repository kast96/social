import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <div className="users">
        {
          this.props.users.map(user => 
            <div className="user" key={user.id}>
              <div className="user__left">
                <div className="user__img">
                  <img src={(user.photos.small != null) ? user.photos.small : userPhoto} alt={user.name}/>
                </div>
                <div className="user__subscribe">
                  {(user.followed) ? <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
                </div>
              </div>
              <div className="user__right">
                <div className="user__name">{user.name}</div>
                <div className="user__status">{user.status}</div>
                {/*<div className="user__location">{user.location.city}, {user.location.country}</div>*/}
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Users;
