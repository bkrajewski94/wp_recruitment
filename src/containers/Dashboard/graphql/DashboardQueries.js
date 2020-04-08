import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const mainArticlesQuery = gql`
  query mainArticlesQuery($limit: Int, $t: [ArticleType]!) {
    tileset(limit: $limit, t: $t) {
      id
      title
      url
      img {
        original_url
      }
    }
  }
`;

const withMainArticles = graphql(mainArticlesQuery, {
  props: (props) => {
    const { data, ownProps } = props;
    return {
      mainArticles: data.tileset ? data.tileset : [],
      mainArticlesLoading: !data.tileset,
      ...ownProps,
    };
  },
  options: (props) => ({
    variables: {
      limit: 9,
      t: 'Article',
    },
    fetchPolicy: 'network-only',
  }),
});

export const withDashboardQueries = withMainArticles;
