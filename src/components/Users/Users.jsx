import React from "react";
import classes from "./Users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers( [
            { id: 1, photoUrl: 'https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700__340.jpg', 
            followed: false, nickname: "Zigmund", status:'looking for a job!', location:{
                city: 'Baden Baden', country: 'Germany'
            } 
            },
            { id: 2, photoUrl: 'https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700__340.jpg', 
            followed: false, nickname: "Alfred", status:'kiss my ass',
            location:{
                city: 'Baden Baden', country: 'Germany'
            }  
            },
            { id: 3, photoUrl: 'https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700__340.jpg', 
            followed: true, nickname: "Danny", status:'adsdsad',
            location:{
                city: 'Baden Baden', country: 'Germany'
            }  
            },
            { id: 4, photoUrl: 'https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700__340.jpg', 
            followed: false, nickname: "Alex", status:'wwds fxdf c',
            location:{
                city: 'Baden Baden', country: 'Germany'
            }  
            },
            
          ]
        )
    }

    return <div>
        {
            props.users.map( u => <div key={(u.id)}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.ava} />
                    </div>
                    <div>
                        { u.followed 
                        ? 
                        <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                        : 
                        <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.nickname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;