import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useUser = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const createUser = async (user) => {
    const { data } = await mutate({
      variables: { user }
    });

    if (data?.createUser?.username && data?.createUser?.id) {
      await signIn(user);
      navigate("/", { replace: true });
    }
  }

  return [createUser, result]
};

export default useUser;
