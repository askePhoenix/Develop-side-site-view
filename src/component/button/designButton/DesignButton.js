import React from 'react'

function DesignButton(props) {
    return (
        <input type="button">
            { props.context || "default" }
        </input>
    );
}

export default DesignButton;
