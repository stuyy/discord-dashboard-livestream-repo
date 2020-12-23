import React from 'react';
import { Spinner } from '@chakra-ui/core';

const styles = {
  height: "12rem",
  width: "12rem",
  borderWidth: "10px",
  display: "block",
  margin: "0 auto",
  marginTop: "250px",
};
export const SpinnerComponent = (props) => (
  <Spinner
    style={styles}
    thickness="4px"
    speed="0.95s"
    emptyColor="#797979"
    color="orange.500"
  />
)