import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Text, Input, Select, Checkbox, Button } from '@chakra-ui/core';

const validation = Yup.object().shape( {
  name: Yup.string()
    .max( 32, 'Too Long!' )
    .required( 'Command name is required!' ),
  description: Yup.string()
    .max( 80, "Too Long!" )
    .required( "Description is required!" ),
  type: Yup.string().required( "Required" ),
  enabled: Yup.boolean(),
} );

const InputField = ( { label, ...props } ) => {
  const [ field, meta, helpers ] = useField( props );
  return (
    <>
      <Text>{label}</Text>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
const SelectField = ( { label, options, onChange, ...props } ) => {
  console.log( props );
  const [ field, meta, helpers ] = useField( props );
  return (
    <>
      <Select onChange={onChange} id="select">
        {options.map((opt) => (
          <option id={ opt.value } value={opt.value}>{opt.name}</option>
        ))}
      </Select>
    </>
  );
}


const CheckField = ({ label, onChange, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <Checkbox name="enabled" id="enabled" onChange={ onChange }>Enabled</Checkbox>
    </>
  );
};

export const CommandCreateForm = ( {
  createCommand,
}) => {
  
  return (
    <Formik
      initialValues={ {
        name: '',
        description: '',
        type: 'basic',
        enabled: false,
      } }
      validationSchema={ validation }
      onSubmit={ ( values, { resetForm }) => {
        createCommand( values );
        resetForm();
      } }
      onReset={ ( values ) => {
        console.log( values );
      }}
    >
      { ( props ) => (
        <Form>
          <InputField name="name" label="Command Name" />
          <InputField name="description" label="Description" />
          <SelectField
            name="type"
            onChange={props.handleChange}
            label="Command Type"
            options={[
              { name: "Basic", value: "basic" },
              { name: "Moderator", value: "moderator" },
              { name: "Administrator", value: "administrator" },
            ]}
          />
          <CheckField name="enabled" onChange={props.handleChange} />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  )
}