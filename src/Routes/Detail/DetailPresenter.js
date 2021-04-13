import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Section from "Components/Section";
import DetailSection from "Components/DetailSection";
import DetailSeason from "Components/DetailSeason";


const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 77px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 35px;
`;

const Title = styled.h3`
  font-size: 32px;
  
`;

const Subtitle = styled.span`
  padding: 20px 20px;
  font-size: 14px;
  font-weight: 600;
`;

const SubDescription = styled.p`
  margin-left:20px;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;



const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const HeaderList = styled.ul`
  margin-top: 25px;
  margin-left: 50px;
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
`;

const HeaderItem = styled.li`
  width: 80px;
  height: 25px;
  text-align: center;
  border-bottom: 5px solid #f39c12;
  transition: border-bottom 0.3s ease-in-out;

`;


const DetailPresenter = ({  result, result2, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Content>
       
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
         <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <ItemContainer>
            <Item>
              { result.imdb_id ? (
                 <a href={`https://www.imdb.com/title/${result.imdb_id}/`} target="_blank"><img class="pri_image" src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" width="64" height="32"></img></a>
              ) : ""

              }
              
            </Item>
          </ItemContainer>
          {/* <HeaderList>
              <HeaderItem>
                Actors
              </HeaderItem>
              <HeaderItem>
                Review
              </HeaderItem>
              <HeaderItem>
                Trailer
              </HeaderItem>
          </HeaderList> */}
 
              <Section title="Production Companies">
              {result.production_companies.map(production_companies => (
                <DetailSection
                id={production_companies.id}
                logo_path={production_companies.logo_path}
                name={production_companies.name}
                origin_country={production_companies.origin_country }
                />
                  
                ))}
              </Section>
        <Subtitle>Production Countries</Subtitle>
        {result.production_countries.map(production_countries => (
         <SubDescription>{production_countries.name}</SubDescription>
          ))}
        

        { result.seasons
              ? (  <Section title="Seasons">
              {result.seasons.map(seasons => (
                <DetailSeason
                air_date={seasons.air_date}
                episode_count={seasons.episode_count}
                id={seasons.id}
                name={seasons.name}
                overview={seasons.overview}
                poster_path={seasons.poster_path}
                season_number={seasons.season_number}
              />
              
              ))}
              </Section>) : ""}
          
      </Data>
    </Content>
  </Container>
  );
DetailPresenter.propTypes = {
  result: PropTypes.object,
  result2: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;