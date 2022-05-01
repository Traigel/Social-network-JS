import axios from "axios";
import React from "react";
import classes from "./Users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });
    }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div className={classes.item}>
              <img src={u.photoUrl} />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {props.unfollow(u.id);}}>Unfollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
              }
            </div>
          </div>
          <div>
            <div>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>"{u.location.city}"</div>
              <div>"{u.location.country}"</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
