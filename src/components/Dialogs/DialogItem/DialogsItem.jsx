import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const Users = (props) => {
  return (
    <div className={classes.item}>
      <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};



export default Users;


