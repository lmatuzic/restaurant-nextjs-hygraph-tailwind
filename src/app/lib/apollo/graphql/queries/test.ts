import { gql } from "@apollo/client";

export const TEST = gql`
  query {
    demoModels {
      title
      subtitle
    }
  }
`;
