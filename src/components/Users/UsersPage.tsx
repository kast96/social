
import React from 'react';
import { useSelector } from 'react-redux';
import { Users } from './Users';
import Preloader from './../common/Preloader/Preloader';
import { getStateIsFetching } from '../../redux/users-selectors';

export const UsersPage: React.FC = () => {
  const isFetching = useSelector(getStateIsFetching)

  return (
    <>
    <h1>Пользователи</h1>
    {isFetching ? <Preloader /> : null}
    <Users />
    </>
  )
}

export default UsersPage