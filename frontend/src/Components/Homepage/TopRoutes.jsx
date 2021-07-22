import React from "react";
import { Heading, Grid, Container, CityFlex, Button, CityName } from "./TopRoutes.styled";

export function TopRoutes() {
  return (
    <Container>
      <Heading>Top Routes</Heading>
      <Grid>
        <div>
          <CityFlex>
            <CityName>Bengaluru to Hyderabad</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Hyderabad To Bengaluru</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Bengaluru To Chennai</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Chennai To Bengaluru</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Hyderabad To Vijayawada</CityName>
            <Button>Book Now</Button>
          </CityFlex>
        </div>
        <div>
          <CityFlex>
            <CityName>Indore To Bhopal</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Bhopal To Indore</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Vijayawada To Hyderabad</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Hyderabad To Guntur</CityName>
            <Button>Book Now</Button>
          </CityFlex>
          <CityFlex>
            <CityName>Chennai To Coimbatore</CityName>
            <Button>Book Now</Button>
          </CityFlex>
        </div>
      </Grid>
    </Container>
  );
}
