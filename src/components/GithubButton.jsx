import { Button } from "react-native";
import * as Linking from 'expo-linking'
import { theme } from "../theme";

const GithubButton = ({ url }) => {
  const onPress = async () => await Linking.openURL(url);
  return (
    <Button color={theme.colors.primary} title="Open in GitHub" onPress={onPress} />
  );
};

export default GithubButton;
