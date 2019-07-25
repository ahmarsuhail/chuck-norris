import {gql} from 'apollo-boost'

const GET_CATEGORIES = gql`
query {categories}
`
const GET_JOKE = gql`
query Joke($category: String!) {
  joke(category: $category) {
    categories,
    value
  }
}
`

export {GET_CATEGORIES, GET_JOKE}
