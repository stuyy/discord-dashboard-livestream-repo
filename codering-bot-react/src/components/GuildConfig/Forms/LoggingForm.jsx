import React from 'react';
import { useFormik } from 'formik';
import { Select, Text, Button } from '@chakra-ui/core';
import '../index.css';

export const LoggingCategoryForm = ({
  channels,
  updateGuildLogging,
}) => {
  const formik = useFormik({
    initialValues: {
      welcomeChannel: "",
      msgChannel: "",
      modLogChannel: "",
    },
    onSubmit: (value) => updateGuildLogging(value),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Text className="select-title">Member Join/Leave Channel</Text>
      <Select variant="filled" name="welcomeChannel" placeholder="Select" onChange={formik.handleChange}>
        {channels.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </Select>
      <Text className="select-title">Deleted Messages</Text>
      <Select variant="filled" name="msgChannel" placeholder="Select" onChange={formik.handleChange}>
        {channels.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </Select>
      <Text className="select-title">Moderation</Text>
      <Select variant="filled" name="modLogChannel" placeholder="Select" onChange={formik.handleChange}>
        {channels.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </Select>
      <Button type="submit" variant="solid" variantColor="orange">Submit</Button>
    </form>
  )
}