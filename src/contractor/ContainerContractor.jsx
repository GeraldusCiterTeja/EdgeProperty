import React from "react";

function ContainerContractor(){
    const data=[
        {
            id: 1, image: "images/img.jpg", description: "Deskripsi project 1"
        },
        {
            id: 2, image: "images/img.jpg", description: "Deskripsi project 2"
        },
        {
            id: 3, image: "images/img.jpg", description: "Deskripsi project 3"
        },
        {
            id: 4, image: "images/img.jpg", description: "Deskripsi project 4"
        },
    ]
    return(
        <div className="containerContractor">
            {data.map((item, index) => (
                <div key={item.id} className={`item${index % 2 === 0 ? "left" : "right"}`}>
                    <img src={item.image}></img>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ContainerContractor;