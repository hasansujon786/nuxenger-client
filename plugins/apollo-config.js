import { API_ENDPOINT, WS_ENDPOINT } from '../config'
export default {
  // Session Cookie name
  tokenName: 'sid', // optional, default: apollo-token
  cookieAttributes: {
    /**
     * Define when the cookie will be removed. Value can be a Number
     * which will be interpreted as days from time of creation or a
     * Date instance. If omitted, the cookie becomes a session cookie.
     */
    expires: 7, // optional, default: 7 (days)

    /**
     * Define the path where the cookie is available. Defaults to '/'
     */
    path: '/', // optional
    /**
     * Define the domain where the cookie is available. Defaults to
     * the domain of the page where the cookie was created.
     */
    domain: 'http://localhost:3000', // optional

    /**
     * A Boolean indicating if the cookie transmission requires a
     * secure protocol (https). Defaults to false.
     */
    secure: false
  },
  includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
  authenticationType: 'Basic', // optional, default: 'Bearer'
  // (Optional) Default 'apollo' definition
  defaultOptions: {
    // See 'apollo' definition
    // For example: default query options
    $query: {
      loadingKey: 'loading',
      fetchPolicy: 'cache-and-network'
    }
  },
  // optional
  errorHandler: '~/plugins/apollo-error-handler.js',
  // required
  clientConfigs: {
    default: {
      // required
      httpEndpoint: API_ENDPOINT,
      // optional
      // See https://www.apollographql.com/docs/link/links/http.html#options
      httpLinkOptions: {
        credentials: 'include'
      },
      // You can use `wss` for secure connection (recommended in production)
      // Use `null` to disable subscriptions
      wsEndpoint: WS_ENDPOINT, // optional
      // LocalStorage token
      tokenName: 'apollo-token', // optional
      // Enable Automatic Query persisting with Apollo Engine
      persisting: false, // Optional
      // Use websockets for everything (no HTTP)
      // You need to pass a `wsEndpoint` for this to work
      websocketsOnly: false // Optional
    }
  }
}
