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

  export const addClient = gql`
  mutation AddClient(
    $firstname: String!,
    $surname: String!,
    $email: String!,
    $mobilePhone: String!,
    $address: AddressInput 
  ) 
  {
    addClient(
      firstname: $firstname
      surname: $surname
      address: $AddressInput
      email: $email
      mobilePhone: $mobilePhone
  ) 
  {
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