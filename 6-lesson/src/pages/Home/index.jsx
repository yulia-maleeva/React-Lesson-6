import React from "react";

import NewsSources from "../../components/NewsSources";
import LinkButton from "../../components/LinkButton";

import styled from "styled-components";

const Home = () => (
  <MainContainer>
    <LinkButton text="News" route="news" />
    <NewsSources />
  </MainContainer>
);

export default Home;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;
