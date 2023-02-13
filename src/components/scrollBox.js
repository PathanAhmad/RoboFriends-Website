import React from 'react';
import 'tachyons';

const scrollBox = (props) => {
    return(
        <div style = {{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default scrollBox;