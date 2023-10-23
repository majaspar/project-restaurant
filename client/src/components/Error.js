import React from "react";

export default function Error({ message = "Something went wrong." }) {
    return (


        <div className="error mt1 mb2">{message}</div>


    );
}