import gql from 'graphql-tag'

export const SIGN_IN_MUTATION = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      name
      username
      chats {
        id
        title
        lastMessage {
          body
          sender {
            name
          }
        }
      }
    }
  }
`
export const SIGN_OUT_MUTATION = gql`
  mutation {
    signOut
  }
`
export const SIGN_UP_MUTATION = gql`
  mutation($email: String!, $password: String!, $username: String!, $fullname: String!) {
    signUp(email: $email, password: $password, username: $username, name: $fullname) {
      id
    }
  }
`

export const ME_QUERY = gql`
  query me {
    me {
      id
      name
      username
      chats {
        id
        title
        lastMessage {
          body
          sender {
            name
          }
        }
      }
    }
  }
`
