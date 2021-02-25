import React from "react"

const PieceForm = ({title, type}) => {
    return (
        <>
            <p>{title}</p>
            <input type={type}></input>
        </>
    )
}

export default PieceForm