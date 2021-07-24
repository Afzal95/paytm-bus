import React from 'react'
import {Offer,Img,Main,Promo} from "./Offers.js"

export default function Offers() {
    return (
        <>
        <div>Offers</div>
        <Offer>
            <Main><Img src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1622808761604.jpg"/>
            <Promo>Use promocode:BUS1200</Promo></Main>
            <Main><Img src="https://assetscdn1.paytm.com/images/catalog/view_item/851829/1626944877134.jpg"/>
            <Promo>Use promocode:FREERIDE</Promo></Main>
            <Main><Img src="https://assetscdn1.paytm.com/images/catalog/view_item/793709/1623139623350.jpg"/>
            <Promo>Use promocode:NA</Promo></Main>
            </Offer>
        </>
    )
}
