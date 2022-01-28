import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { CREATE_REVIEW } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();
  const authStorage = useAuthStorage();

  const addReview = async (values) => {
    const accessToken = await authStorage.getAccessToken();

    const review = { ...values, rating: parseInt(values.rating) };
    const { data } = await mutate({
      variables: {
        review,
      },
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    });

    if (data?.createReview?.repositoryId) {
      navigate(`/${data?.createReview?.repositoryId}`);
    }

    return data;
  }

  return [addReview, result]
};

export default useReview;
