import React from 'react';
import _css from './person.module.css';
import {NavLink} from 'react-router-dom';


const PERSON = (props) => {
    return  <NavLink to ={"/dialogs/" + props.id}>
    
    <div className={_css.dialog}>
    
                <div className={_css.avatar}><img src="https://miro.medium.com/max/11730/0*ihTZPO4iffJ8n69_" /></div>
                <div className={_css.name_surname}>{props.name}</div>
                <div className={_css.lm_time}>10:01</div>
                <div className={_css.text_message}>{props.text}</div>
            </div>
    </NavLink>
}

export default PERSON; 