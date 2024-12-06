import React from "react";
import ContainerDepelopment1 from "./ContainerDevelopment1";
import ContainerDepelopment2 from "./ContainerDevelopment2";
import ContainerDepelopment3 from "./ContainerDevelopment3";
import ContainerDepelopment4 from "./ContainerDevelopment4";

function AllContainerDevelopment(){
    return(
        <div className="allContainerDevelopment">
            <ContainerDepelopment1 />
            <ContainerDepelopment2 />
            <ContainerDepelopment3 />
            <ContainerDepelopment4 />
        </div>
    )
}

export default AllContainerDevelopment