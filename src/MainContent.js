import React from "react";
import "./MainContent.css"
import data from "./data"
import Card from "./Card"
import Nav from "./Nav"

export default function MainContent() {
    const dataSet = data.map(x => {
        return <Card 
            keys={x.title}
            title={x.title}
            location={x.location}
            googleMapsUrl={x.googleMapsUrl}
            startDate={x.startDate}
            endDate={x.endDate}
            description={x.description}
            image={x.imageUrl}
        />
    })

    return (
        <>
            <Nav />
            <div className="main">
                {dataSet}
            </div>
        </>
    )
}