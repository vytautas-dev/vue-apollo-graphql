import gql from "graphql-tag";

export const GET_BOOKS = gql`
    query Books ($bookInput: BookInput) {
        books(bookInput: $bookInput) {
            _id
            user
            author
            title
            description
            genre
        }
    }
`;