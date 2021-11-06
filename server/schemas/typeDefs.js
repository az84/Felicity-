const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }
    type Product {
        _id: ID
        name: String
        price: Float
        description: String
        image: String
        category: Category
    }
    
    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }
    type Checkout {
        session: ID
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        user(email: String!): User
        users: [User]
        product(_id: ID!): Product
        products(category: ID, name: String): [Product]
        categories: [Category]
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addProduct(name: String!, price: Float!, description: String, image: String): Product
        addOrder(products: [ID]!): Order
    }
`;

module.exports = typeDefs;
