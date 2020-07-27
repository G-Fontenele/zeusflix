import React from 'react';

function ButtonLink(props) {
    //porps => { className: 'INDEX.JS MENU'}

    //console.log(props)
    return (
        <a href = {props.href} className = {props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;