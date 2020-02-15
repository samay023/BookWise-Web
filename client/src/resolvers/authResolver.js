import gql from 'graphql-tag';

export const login = gql`
query Login($email: String!, $password: String!)
    {
        login(email:$email, password:$password)
        {
            user
            {
                id
                email
                name
            }
            token
            tokenExpiration
            
        }
    }`;