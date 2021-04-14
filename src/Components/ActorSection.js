import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size:12px;

`;

const Image = styled.div`
  background-image:url(${props =>props.bgUrl});
  height:125px;
  width: 125px;
  background-size: cover;
  border-radius: 15px;
  background-position: center center;
  transition: opacity 0.1s linear;
  margin-bottom: 15px;
  opacity: 1;

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
const Subtitle = styled.span`
  display:block;
  opacity: .7;
`;


const DetailSection = ({ profile_path, original_name, character }) => (
    <Container>
        <Image 
        bgUrl={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : require("../assets/noPosterSmall.png").default} 
        />
      <Title>{original_name}</Title>
      <Subtitle>{character}</Subtitle>
    </Container>
);

DetailSection.propTypes = {
  id: PropTypes.number.isRequired,
  logo_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  origin_country: PropTypes.string,
};

export default DetailSection;