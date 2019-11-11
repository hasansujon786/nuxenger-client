import gql from 'graphql-tag'

export const START_GROUP_CHAT_MUTATION = gql`
  mutation($title: String, $userIds: [ID!]!) {
    startGroupChat(title: $title, userIds: $userIds) {
      id
      title
    }
  }
`
export const DELETE_A_GROUP_CHAT_MUTATION = gql`
  mutation($chatId: ID!) {
    deleteAGroupChat(chatId: $chatId) {
      id
    }
  }
`

export const CHAT_QUERY = gql`
  query($chatId: String) {
    chat(chatId: $chatId) {
      id
      title
      messages {
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

export const CHAT_SUBSCRIPTION = gql`
  subscription chat($currentUserId: ID!) {
    chat(currentUserId: $currentUserId) {
      mutation
      data {
        id
        title
        lastMessage {
          body
          id
        }
      }
    }
  }
`
