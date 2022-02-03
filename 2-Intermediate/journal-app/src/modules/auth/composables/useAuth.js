import { useStore } from "vuex";

const useAuth = () => {
  const store = useStore();

  const createUser = async (user) => {
    console.log(user);
    const response = await store.dispatch("auth/createUser", user);
    console.log(response);
    return response;
  };

  return {
    createUser,
  };
};

export default useAuth;
