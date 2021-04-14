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
`;

const Title = styled.span`
  display:block;
`;


const DetailSeason = ({ air_date, episode_count, id, name, overview, poster_path, season_number }) => (
    <Container>
        <Image 
        bgUrl={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : require("../assets/noPosterSmall.png").default} 
        />
        <Title>{name} 
        {air_date ? (
         ` (${air_date.substring(0, 4)})`
        )
        : ""}
        </Title>
       
     
    </Container>
);

DetailSeason.propTypes = {
  air_date: PropTypes.string,
  episode_count: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  season_number: PropTypes.number,

};

export default DetailSeason;