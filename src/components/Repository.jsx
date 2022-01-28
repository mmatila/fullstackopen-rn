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
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id }
  });
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
    />
  );
};

export default Repository;
