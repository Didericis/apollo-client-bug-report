import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose } from 'recompose';
import { withRouter } from 'react-router';

import PersonList from 'components/person_list';

// adds the 'people' prop
const withPeople = compose(
  withRouter,
  graphql(
    gql`
    query PersonListQuery($input: PeopleQueryInput!) {
      people(input: $input) { id name }
    }`,
    {
      options: ({ match: { params: { letter } } }) => {
        const vars = { input: { letter } };
        console.log('VARIABLES', vars)
        return { variables: vars };
      },
      props: ({ data: { people } }) => {
        console.log('PEOPLE', people);
        return { people };
      }
    }
  )
);

export default withPeople(PersonList)
