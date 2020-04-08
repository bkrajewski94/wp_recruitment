import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const articleQuery = gql`
  query article($url: String!) {
    article(url: $url) {
      title
      body {
        data
      }
      img {
        original_url
        author
        source
      }
    }
  }
`;

export const withArticle = graphql(articleQuery, {
  props: (props) => {
    const { data, ownProps } = props;
    return {
      article: data.article ? data.article : {},
      isLoading: !data.article,
      ...ownProps,
    };
  },
  options: (props) => {
    const params = new URLSearchParams(props.location.search);
    console.log(params.get('url'));
    return {
      variables: {
        url: params.get('url'),
      },
      fetchPolicy: 'network-only',
    };
  },
});
