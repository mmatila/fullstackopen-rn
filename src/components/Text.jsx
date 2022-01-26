import { Text as NativeText, StyleSheet } from 'react-native';
import { theme } from '../theme';

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary,
  },
  body: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
  },
  noMargin: { marginBottom: 0 },
});

const Text = ({ variant = 'body', noMargin, fontSize, ...props }) => {
  const textStyles = [
    { marginBottom: 6 },
    variant === 'heading' && styles.heading,
    variant === 'subheading' && styles.subheading,
    noMargin && styles.noMargin,
    fontSize && { fontSize },
  ]
  return (
    <NativeText style={textStyles} {...props} />
  );
};

export default Text;
