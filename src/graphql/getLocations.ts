import { gql } from "@apollo/client";

export type GetLocations = {
  locations: {
    id: string;
    name: string;
    description: string;
    photo: string;
  }[];
};

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
