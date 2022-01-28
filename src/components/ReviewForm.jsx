import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

import { theme } from '../theme';
import Text from './Text';
import useReview from '../hooks/useReview';

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
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be greater than 0')
    .max(100, 'Rating must be less than 100'),
  review: yup.string(),
});

const ReviewForm = () => {
  const [addReview] = useReview();
  const onSubmit = async (values) => {
    try {
      const response = await addReview(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput style={styles.input} name="ownerName" placeholder="Repository owner name" />
          <FormikTextInput style={styles.input} name="repositoryName" placeholder="Repository name" />
          <FormikTextInput style={styles.input} name="rating" placeholder="Rating between 0 and 100" />
          <FormikTextInput multiline numberOfLines={3} style={styles.input} name="text" placeholder="Review" />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonLabel}>Create a review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
