import * as axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userPhoto from '../../components/img/11.jpg'

class Users extends React.Component {
  
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);

      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
        if(i == 25)break;
    }
    return (
      <div>
        <div>
            {pages.map(p => {
                return <span className={this.props.currentPage === p && classes.selectedPage} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div className={classes.users}>
              <span>
                <div className={classes.left}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={classes.ava}
                  />
                  <div className={classes.butt}>
                    {u.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(u.id);
                        }}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(u.id);
                        }}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              </span>
              <span className={classes.right}>
                <span className={classes.name}>
                  <div className={classes.one}>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span className={classes.location}>
                  <div className={classes.one}>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default Users;