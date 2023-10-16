import React from "react";

export default function ErrorSmall({ message = "Something went wrong." }) {
    return (


        <div className="ErrorSmall mt1 mb2"><i className="fa-solid fa-minus"></i> {message}</div>


    );
}