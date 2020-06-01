import React from "react";
import { withLoading } from '../hocs/withLoading';

const Infos = () => (
    <ul style={{
        clear: 'both',
        display: 'block',
        listStyle: 'none'
    }}>
        <li>
            <img 
                alt="me"
                src='https://avatars3.githubusercontent.com/u/7636517?s=460&v=4'
                style={{margin: '0 auto'}}
            />
        </li>
        <li>My name: Fco Lucas</li>
        <li>My username: fcolucas</li>
        <li>My login: fcolucas</li>
    </ul>
);

export default withLoading(Infos);