import {graphql, compose} from "react-apollo";
import gql from "graphql-tag";

const mainArticlesQuery = gql`
    query mainArticlesQuery($limit: Int, $t: [ArticleType]!) {
        tileset(limit: $limit, t:$t) {
            title,
        }
    }
`;

const withMainArticles = graphql(mainArticlesQuery, {
    props: (props) => {
        const {data, ownProps} = props;
        console.group(data);
        return {
            // allContactLists: data.allContactLists ? data.allContactLists.results : [],
            // selectedContactLists: data.selectedContactLists ? data.selectedContactLists : {},
            // contactListsDataLoading: !data.allContactLists,
            // refetchContactListsData : data.refetch,
            // ...ownProps
            data
        }
    },
    options: (props) => ({
        variables: {
            limit: 9,
            t: "Article",
        },
        fetchPolicy: "network-only"
    })
});

export const withDashboardQueries = compose(
    withMainArticles
);
