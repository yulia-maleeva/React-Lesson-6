import React, { memo } from "react";
import { PropTypes } from "prop-types";

import { Link } from "react-router-dom";

import styled from "styled-components";

const LinkButton = ({ route, text }) => (
  <NavbarLink to={`/${route}`}>{text}</NavbarLink>
);

LinkButton.defaultProps = {
  text: "Click!",
};

LinkButton.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default memo(LinkButton);

const NavbarLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
