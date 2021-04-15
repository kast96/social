import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currnetPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className="users">
        {
          pages.map(page => 
            <span key={page} className={this.props.currentPage === page ? 'is-active' : ''} onClick={(e) => {this.onPageChanged(page)}}>{page}</span>
          )
        }
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
