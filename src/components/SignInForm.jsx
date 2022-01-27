import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import { theme } from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";

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
    marginTop: 12,
    borderRadius: 4,
  },
  buttonLabel: {
    color: theme.colors.background.light,
    fontWeight: theme.fontWeights.bold,
  },
  input: {
    height: 40,
    marginTop: 12,
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

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

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
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  );
}

export default SignInForm;
