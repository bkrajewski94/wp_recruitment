import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const mainArticlesQuery = gql`
  query mainArticlesQuery($limit: Int, $t: [ArticleType]!) {
    mainArticles: tileset(limit: $limit, t: $t) {
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
      mainArticles: data.mainArticles ? data.mainArticles : [],
      mainArticlesLoading: !data.mainArticles,
      error: data.error,
      ...ownProps,
    };
  },
  options: (props) => ({
    variables: {
      limit: 9,
      t: 'Article',
    },
  }),
});


const articlesQuery = gql`
  query mainArticlesQuery($limit: Int, $t: [ArticleType]!, $offset: Int) {
    articles(limit: $limit, t: $t, offset: $offset) {
      id
      title
      url
      img {
        original_url
      }
    }
  }
`;

export const LIMIT = 9;

export const withArticles = graphql(articlesQuery, {
  props: (props) => {
    const { data, ownProps } = props;

    return {
      articles: data.articles ? data.articles : [],
      articlesLoading: !data.articles,
      fetchMoreArticles: data.fetchMore,
      ...ownProps,
    };
  },
  options: (props) => ({
    variables: {
      limit: LIMIT,
      t: 'Article',
      offset: 0
    },
  }),
});

export const withDashboardQueries = withMainArticles;
