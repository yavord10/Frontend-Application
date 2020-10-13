import React from 'react';

import style from './styles/SideNav.module.scss';

const SideNavLink = ({ name }) => {
    return (
        <div className={style.sideNavLink}>
            {name}
        </div>
    )
}

export default SideNavLink;