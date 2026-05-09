import React from 'react'

const Text = ({children = "no-data"}) => {
    // console.log("text component is running now");
    return (
        <h2>{children}</h2>
    )
}

export default Text