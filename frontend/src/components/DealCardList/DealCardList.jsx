import React from 'react'
import DealCard from "../DealCard/DealCard"

export default function DealCardList({DealCardList}) {
    return (
        DealCardList.map(dealCard =>{
            return <DealCard dealCard = {dealCard}/>
        })
    )
}
