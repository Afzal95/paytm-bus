import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const Img = styled.img`
  width: 280px;
  height: 150px;
`;
const CarDiv = styled.div`
z-index: 1;
  border: 1px solid black;
  width: 280px;
  border-radius: 10px;
  margin: auto;
  background-color:white;
  padding-bottom: 10px;
`;

export function OffersCar() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },

    mid: {
      breakpoint: { max: 800, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ marginTop: "20%" }}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        transitionDuration={500}
      >
        <CarDiv>
          {" "}
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/788861/1622808761604.jpg"
            alt="ic"
          />
          <div>Use promocode:BUS1200</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/793709/1623139623350.jpg"
            alt="ic"
          />
          <div>Use promocode:NA</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/851829/1626944877134.jpg"
            alt="ic"
          />
          <div>Use promocode:FREERIDE</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/710378/1622809355567.jpg"
            alt="ic"
          />
          <div>Use promocode:FREERIDE</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/766373/1615813863123.jpg"
            alt="ic"
          />
          <div>Use promocode:FREERIDE</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/766367/1615811131067.jpg"
            alt="ic"
          />
          <div>Use promocode:FREERIDE</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/809173/1620129129336.jpg"
            alt="ic"
          />
          <div>Use promocode:FREERIDE</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/697386/1613557391509.jpg"
            alt="ic"
          />
          <div>Use promocode:FREERIDE</div>
        </CarDiv>
        <CarDiv>
          <Img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/766375/1615814203168.jpg"
            alt="ic"
          />
          <div>Use promocode:FREERIDE</div>
        </CarDiv>
      </Carousel>
      ;
    </div>
  );
}
