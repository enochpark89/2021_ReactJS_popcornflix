import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content:center;
  padding: 20px;
`;

const Text = styled.span`
  color:#e74c3c;
  font-size: 20px;

`;

const Error = ({text}) => <Container><Text>{text}</Text></Container>

Error.propTypes = {
  text:PropTypes.string.isRequired
}

export default Error;