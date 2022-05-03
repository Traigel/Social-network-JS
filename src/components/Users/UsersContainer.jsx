import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {          //Контейнерная компонента, обращаемся к ней из connectd

  constructor(props) {      
    super(props);
  }

  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetchingAC(false);
        this.props.setUsersAC(response.data.items);
        this.props.setTotalUsersCountAC(response.data.totalCount);
      });
  }

 onPageChanged = (pageNumber) => {
      this.props.setCurrentPageAC(pageNumber);
      this.props.toggleIsFetchingAC(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.toggleIsFetchingAC(false);
          this.props.setUsersAC(response.data.items);
        });
    };
                      //Если isFetching = true, то отображается гифка, если false то нечего не отображается
  render() {
    return <>   
      {this.props.isFetching ? <Preloader /> : null }
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged.bind(this)}
        users={this.props.users}
        unfollowAC={this.props.unfollowAC}
        followAC={this.props.followAC}
      />
    </>
  }
};

let mapStateToProps = (state) => {  //Данные котороые мы прокидываем (через props) 
  return {                          //из state в компоненту
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

export default connect(mapStateToProps, {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC} )(UsersContainer);
