import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size:12px;

`;

const Image = styled.div`
  background-image:url(${props =>props.bgUrl});
  height:180px;
  width: 120px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
  margin-bottom: 15px;
  opacity: 1;
  border: 1.5px #00a8ff solid;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity:0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover{
    ${Image}{
      opacity:0.3;
    }
    ${Rating} {
      opacity:1;
    }
  }
`;
const Title = styled.span`
  display:block;
`;


const DetailSection = ({ id, logo_path, name, origin_country }) => (
    <Container>
        <Image 
        bgUrl={logo_path ? `https://image.tmdb.org/t/p/w500/${logo_path}` : require("../assets/noPosterSmall.png").default} 
        />
      <Title>{name}, {origin_country}
      </Title>
    </Container>
);

DetailSection.propTypes = {
  id: PropTypes.number.isRequired,
  logo_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  origin_country: PropTypes.string,
};

export default DetailSection;