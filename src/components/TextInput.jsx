import { TextInput as NativeTextInput, Platform } from 'react-native';
import { theme } from '../theme';

const TextInput = ({ style, error, numberOfLines, ...props }) => {
  const textInputStyle = [style];

  return (
    <NativeTextInput
      style={[textInputStyle, error && { borderColor: theme.colors.error }]}
      numberOfLines={Platform.OS === 'ios' ? null : numberOfLines}
      minHeight={(Platform.OS === 'ios' && numberOfLines) ? (20 * numberOfLines) : null}
      {...props}
    />
  ); 
};

export default TextInput;