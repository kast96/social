import {NavLink} from 'react-router-dom';

const DialogsItem = (props) => {
  let path = '/dialogs/'+props.id+'/';
  return (
    <NavLink className="dialog" to={path}>{props.name}</NavLink>
  );
}

export default DialogsItem;
