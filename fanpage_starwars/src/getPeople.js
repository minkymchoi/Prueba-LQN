import {gql} from "@apollo/client";

export const ALL_PEOPLE = gql`
query {
  allPeople {
    edges {
      node {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        height
        mass
        skinColor
        homeworld {
          name
        }
        filmConnection {
          edges {
            node {
              id
              title
            }
          }
        }
        starshipConnection {
          edges {
            node {
              id
              name
            }
          }
        }
        vehicleConnection {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
`