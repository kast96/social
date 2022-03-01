import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
});

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent:React.FC<MapPropsType> = ({isAuth, ...props}) => {
        if(!isAuth) return <Redirect to="/login/" />
        return <WrappedComponent {...props as unknown as WCP} />
    }

    return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);
}