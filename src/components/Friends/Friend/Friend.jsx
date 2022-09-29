import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../Friends.module.css'



const Friend = (props) => {

    return (
        <div className={style.Friend}>
            <NavLink to={"/friends/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Friend