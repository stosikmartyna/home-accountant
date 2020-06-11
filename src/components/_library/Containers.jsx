import React from 'react';

export const Col = (props) => {
    const style = {
        marginRight: `${props.marginRight}rem`,
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export const Row = (props) => {
    const style = {
        display: 'flex',
        marginBottom: `${props.marginBottom}rem`,
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}