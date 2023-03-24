import React from "react";

import { PropTypes } from "prop-types";

import {
  Card as MaterialCard,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const Card = ({ item }) => {
  return (
    <MaterialCard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          {item.title && (
            <Typography>
              <b>Title:</b> {item.title}
            </Typography>
          )}

          {item.publishedAt && (
            <Typography variant="body2" color="text.secondary">
              <b>Published at:</b> {item.publishedAt}
            </Typography>
          )}

          {item.author && (
            <Typography variant="body2" color="text.secondary">
              <b>Author:</b> {item.author}
            </Typography>
          )}

          {item.description && (
            <Typography>
              <b>Description:</b> {item.description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </MaterialCard>
  );
};

Card.propTypes = {
  item: PropTypes.any.isRequired,
};

export default Card;
