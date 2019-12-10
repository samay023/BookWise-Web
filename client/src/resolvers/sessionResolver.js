import gql from 'graphql-tag';

export const getSessions = gql`
query {
    getSessions {
      id
      title
      description
      sessionFee
      createdDate
      sessionDate
      sessionStartTime
      sessionEndTime
      notes
      address {
        streetNumber
        streetName
        suburb
        postcode
        state
      }
      clientDetails {
        id
        firstname
        surname
        email
        mobilePhone
        address {
          streetNumber
          streetName
          suburb
          postcode
          state
        }
      }
    }
}`;

export const addSession = gql`
mutation AddSession(
    $title: String!, 
    $description: String!,
    $address: AddressInput 
    $sessionFee: Int!, 
    $sessionDate: Date!, 
    $sessionStartTime: Date!
    $sessionEndTime: Date!
    $notes: String!
  ) 
  {
  addSession(
    title: $title,
    description: $description,
    sessionFee: $sessionFee,
    address: $address,
    sessionDate: $sessionDate,
    sessionStartTime: $sessionStartTime,
    sessionEndTime: $sessionEndTime,
    notes: $notes
  ) {
    title
    description
    sessionFee
    createdDate
    address {
      streetNumber
      streetName
      suburb
      postcode
      state
    }
    sessionDate
    sessionStartTime
    sessionEndTime
    notes
  }
}

`;