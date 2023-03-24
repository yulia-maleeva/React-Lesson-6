import React from "react";

import Alert from "@mui/material/Alert";

import styled from "styled-components";

const Error = () => (
  <Container>
    <ErrorMessage variant="filled" severity="error">
      No avaible data!
    </ErrorMessage>
  </Container>
);

export default Error;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ErrorMessage = styled(Alert)`
  width: 50%;
`;
