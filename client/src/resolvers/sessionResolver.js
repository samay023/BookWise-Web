import gql from 'graphql-tag';

/**
 * Gets all the sessions
 */
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

/**
 * Creates a new session
 */
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
}`;

  /**
   * Updates the session
   */
  export const updateSession = gql`
  mutation UpdateSession(
    $id: String!,
    $title: String!, 
    $description: String!,
    $address: AddressInput 
    $sessionFee: Int!, 
    $sessionDate: Date!, 
    $sessionStartTime: Date!
    $sessionEndTime: Date!
    $notes: String!,
    $clientDetails: String!
  ) 
  {
  updateSession(
    id: $id,
    title: $title,
    description: $description,
    sessionFee: $sessionFee,
    address: $address,
    sessionDate: $sessionDate,
    sessionStartTime: $sessionStartTime,
    sessionEndTime: $sessionEndTime,
    notes: $notes,
    clientDetails: $clientDetails
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
    clientDetails{
      firstname
      surname
      email
      mobilePhone
    }
  }
}`;