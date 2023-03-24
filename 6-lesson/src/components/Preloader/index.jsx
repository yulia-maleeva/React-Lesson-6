import React from "react";

import LinearProgress from "@mui/material/LinearProgress";

import styled from "styled-components";

const Preloader = () => (
  <Container>
    Loading...
    <ProgressBar />
  </Container>
);

export default Preloader;

const ProgressBar = styled(LinearProgress)`
  width: 50%;
  height: 10px !important;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
