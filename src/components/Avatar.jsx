import { Image } from 'react-native';

const Avatar = ({ uri }) => {
  return (
    <Image
      source={{ uri }}
      style={{ width: 48, height: 48, borderRadius: 6, marginRight: 12 }}
    />
  );
}

export default Avatar;
