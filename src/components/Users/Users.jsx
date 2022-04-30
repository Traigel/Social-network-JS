import React from "react";
import classes from "./Users.module.css";

let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //         id: 1,
    //         photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    //         followed: false,
    //         fullname: "Dimych",
    //         status: "I am a boss",
    //         location: { city: "Minsk", country: "Belarus" },
    //         },
    //         {
    //         id: 2,
    //         photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    //         followed: true,
    //         fullname: "Sasha",
    //         status: "I am a boss too",
    //         location: { city: "Warshava", country: "Poland" },
    //         },
    //         {
    //         id: 3,
    //         photoUrl: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    //         followed: false,
    //         fullname: "Vladimir",
    //         status: "I am a boss too",
    //         location: { city: "Berlin", country: "Geargi" },
    //         },
    //     ])
    // }

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
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
