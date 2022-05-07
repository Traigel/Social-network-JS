import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../src/assets/images/ava.png"
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= 10; i++) {      //Ограничил показ страниц на 10 шт(для показа всех i <= pagesCount.lenght)
      pages.push(i);
    }
    
    return ( 
      <div>
        <div>
          {pages.map((p) => {
            return <span className={props.currentPage === p && classes.selectedPage}
                          onClick={ () => { props.onPageChanged(p) } }>{p}</span>;
          })}
        </div>

        {props.users.map((u) => (
          <div key={u.id}>
            <div className={classes.user}>
              <div className={classes.item}>
                <NavLink to={"/profile/" + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => {

                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "455241d3-47b3-41f0-8bd1-28ed96c874d5"
                      }
                    })
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.unfollowAC(u.id);
                        }
                      });
                     
                    }}
                  >
                    Unfollow
                  </button>)
                  : (<button onClick={() => {

                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "455241d3-47b3-41f0-8bd1-28ed96c874d5"
                      }
                    })
                      .then((response) => {
                        if (response.data.resultCode == 0) {
                          props.followAC(u.id);
                        }
                      });

                      
                    }}>Follow</button>
                )}
              </div>
            </div>
            <div className={classes.user}>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  
};

export default Users;
