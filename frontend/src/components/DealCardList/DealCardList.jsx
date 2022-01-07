import React from 'react'
import DealCard from "../DealCard/DealCard"

export default function DealCardList({dealCardList}) {
    return (
        dealCardList.map(dealCard =>{
            return <DealCard key={dealCard.id} dealCard = {dealCard}/>
        })
    )
}
