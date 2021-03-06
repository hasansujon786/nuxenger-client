import gql from 'graphql-tag'

export const SEND_MESSAGE_MUTATION = gql`
  mutation($chatId: String!, $body: String!) {
    sendMessage(chatId: $chatId, body: $body) {
      id
      body
    }
  }
`
export const DELETE_A_MESSAGE_MUTATION = gql`
  mutation($messageId: ID!) {
    deleteAMessage(messageId: $messageId) {
      id
    }
  }
`

export const MESSAGE_SUBSCRIPTION = gql`
  subscription message($chatId: ID!) {
    message(chatId: $chatId) {
      mutation
      data {
        id
        body
        createdAt
        sender {
          id
          name
        }
      }
    }
  }
`
