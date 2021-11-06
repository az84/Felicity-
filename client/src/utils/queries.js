import gql from 'graphql-tag';

export const QUERY_USER = gql`
    query user($email: String!) {
        user(email: $email) {
            _id
            firstName
            lastName
            email
            orders {
              _id
              purchaseDate
              products {
                _id
                name
                description
                price
                image
              }
            }
        }
    }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;