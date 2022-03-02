import {NavLink} from 'react-router-dom';

type PropsType = {
  id: number
  name: string
}

const DialogsItem: React.FC<PropsType> = ({id, name}) => {
  let path = '/dialogs/'+id+'/';
  return (
    <NavLink className="dialog" to={path}>{name}</NavLink>
  );
}

export default DialogsItem;
