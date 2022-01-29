import { useQuery } from "@apollo/client";
import { FlatList, Text } from "react-native";
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import { ItemSeparator } from "./RepositoryList";
import Review from "./Review";

const RenderItem = ({ item }) => {
  return (
    <Review item={item} />
  );
};

const Repository = () => {
  const { id } = useParams();
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: {
      id,
      first: 8,
    }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    console.log(canFetchMore);

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id,
        first: 8,
      },
    });
  };

  const reviews = data?.repository?.reviews?.edges.map(edge => edge.node);

  if (loading) return null;

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <RenderItem item={item} />}
      ListHeaderComponent={<RepositoryItem item={data.repository} active />}
      ListHeaderComponentStyle={{ marginBottom: 10 }}
      keyExtractor={(_, index) => index}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.1}
    />
  );
};

export default Repository;
