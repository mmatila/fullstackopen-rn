import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import { theme } from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: theme.colors.background.light,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 4,
  },
  buttonLabel: {
    color: theme.colors.background.light,
    fontWeight: theme.fontWeights.bold,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.textSecondary,
    padding: 10,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const Form = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.input} name="username" placeholder="Username" />
      <FormikTextInput style={styles.input} name="password" secureTextEntry placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonLabel}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignInForm = () => {
  const onSubmit = (values) => console.log(values);
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignInForm;
