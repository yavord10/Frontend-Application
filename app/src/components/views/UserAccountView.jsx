import React from 'react';
import SideNav from '../partials/SideNav/SideNav';
import UserDetailsForm from '../partials/UserForm/UserDetailsForm';

import style from './styles/UserAccountView.module.scss';


const UserAccountView = () => {
    return (
        <div className={style.userAccountContainer}>
            <div className={style.innerUserContainer}>
                <div className={style.leftSide}>
                    <SideNav />
                </div>
                <div className={style.rightSide}>
                    <UserDetailsForm />
                </div>
            </div>
        </div>
    )
}

export default UserAccountView;
