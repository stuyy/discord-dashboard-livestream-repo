import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { getUserDetails } from '../../graphql/queries/getGuildConfig';
import { Box } from '@chakra-ui/core';
import './index.css';
import { CommandCreateForm } from '../../components/CommandForm';
import { createCommandMutation } from '../../graphql/mutations/updatePrefix';

export function AdminPage(props) {
  const { loading, error, data } = useQuery(getUserDetails);
  
  const [createCmdMutation] = useMutation( createCommandMutation );
  const createCommand = (values) => {
    console.log( values ); 
    createCmdMutation( {
      variables: {
        ...values,
      }
    } ).then( ( { data } ) => {
      console.log( data );
    } ).catch( ( err ) => console.log( err ) );
  }
  if (!loading) {
    return (
      <Box className="admin-page-root">
        <CommandCreateForm createCommand={ createCommand }/>
      </Box>
    );
  } else {
    return <h1>Loading...</h1>
  }
}