import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

import { theme } from '../theme';
import Text from './Text';
import useUser from '../hooks/userUser';

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
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(1, 'Username must be at least 1 character long')
    .max(30, 'Username must be at most 30 characters long'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .max(50, 'Password must be at most 50 characters long'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required')
});

const SignUpForm = () => {
  const [createUser] = useUser();

  const onSubmit = async ({ username, password }) => {
    try {
      const response = await createUser({
        username,
        password
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput style={styles.input} name="username" placeholder="Username" />
          <FormikTextInput style={styles.input} secureTextEntry name="password" placeholder="Password" />
          <FormikTextInput style={styles.input} secureTextEntry name="passwordConfirmation" placeholder="Password confirmation" />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonLabel}>Sign up</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
