import React, { useCallback } from "react";
import { useState, useEffect } from "react";

import Card from "../../components/Card";
import LinkButton from "../../components/LinkButton";

import Preloader from "../../components/Preloader";
import Error from "../../components/Error";

import styled from "styled-components";

const News = () => {
  const apiKey = "4b4befbf73f64ac7a9b195b16b42ba85";
  const newsUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`;

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);

    const data = await fetch(newsUrl);

    if (!data.ok) {
      setLoading(false);
      setNews([]);
      setError(true);
      return;
    }

    const updatedData = await data.json();

    console.log(updatedData);

    setLoading(false);
    setNews(updatedData.articles);
  }, []);

  useEffect(() => {
    getData();
  }, [setLoading, setError]);

  return (
    <MainContainer>
      {!loading && <LinkButton text="Home" route="" />}
      {!loading && <h1>News</h1>}
      {news.length > 0 && (
        <CardsContainer>
          {news.map((item) => (
            <Card item={item} key={item.title} />
          ))}
        </CardsContainer>
      )}
      {loading && <Preloader />}
      {error && <Error />}
    </MainContainer>
  );
};

export default News;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;
