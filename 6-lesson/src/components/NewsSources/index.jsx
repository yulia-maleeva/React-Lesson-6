import * as React from "react";
import { useState, useEffect } from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Preloader from "../Preloader";
import Error from "../Error";

import styled from "styled-components";

const NewsSources = () => {
  const apiKey = "4b4befbf73f64ac7a9b195b16b42ba85";
  const newsSourcesUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

  const [newsSources, setNewsSources] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = React.useCallback(async () => {
    setLoading(true);

    const data = await fetch(newsSourcesUrl);

    if (!data.ok) {
      setLoading(false);
      newsSources(null);
      setError(true);
      return;
    }

    const updatedData = await data.json();

    setLoading(false);
    setNewsSources(updatedData.sources);
  }, [setLoading, setError]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!loading && <h1>News Sources</h1>}
      {newsSources && (
        <Container>
          <SourcesList>
            {newsSources.map((item) => (
              <ListItem key={item.id} disablePadding>
                {item.name}
              </ListItem>
            ))}
          </SourcesList>
        </Container>
      )}
      {loading && <Preloader />}
      {error && <Error />}
    </>
  );
};

export default NewsSources;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SourcesList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
`;
