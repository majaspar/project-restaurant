import React from "react";

export default function SuccessSmall({ message = "Something went wrong." }) {
    return (


        <div className="SuccessSmall mt1 mb2"><i className="fa-solid fa-check"></i> {message}</div>


    );
}