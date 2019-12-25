import gql from 'graphql-tag';

export const getClients = gql`
query{
    getClients{
      id
      firstname
      surname
      address {
        streetNumber
        streetName
        suburb
        postcode
        state
      }
      email
      mobilePhone
    }
  }`;