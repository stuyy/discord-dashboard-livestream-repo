import React from 'react';
import { useFormik } from 'formik';
import { Select, Text, Button } from '@chakra-ui/core';
import '../index.css';
import { updateDefaultRole } from '../../../graphql/mutations/updatePrefix';
import { useMutation } from '@apollo/client';

export const BaseForm = ({
  title,
  description,
  rolesOrChannel,
  selected,
  type,
  guildId,
}) => {

  const [updateRole] = useMutation(updateDefaultRole);

  const formik = useFormik({
    initialValues: {
      selected: "",
    },
    onSubmit: ({ selected: roleId }) => {
      console.log(roleId);
      if (type === "roleChange") {
        updateRole({
          variables: {
            guildId,
            roleId,
          }
        }).then(({ data }) => {
          console.log(data);
        }).catch((err) => console.log(err));
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Text className="select-title">{title}</Text>
      <Select
        className="select-box"
        variant="filled"
        name="selected"
        placeholder={description}
        onChange={formik.handleChange}
      >
        {rolesOrChannel.map((option) => (
          <option value={option.id} selected={option.id === selected}>
            {option.name}
          </option>
        ))}
      </Select>
      <Button type="submit" variantColor="orange" marginTop="10px">
        Submit
      </Button>
    </form>
  );
}