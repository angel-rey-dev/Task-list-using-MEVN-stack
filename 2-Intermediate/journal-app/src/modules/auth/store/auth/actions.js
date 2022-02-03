import authApi from "../.../../../../../api/authApi";

export const createUser = async ({ commit }, user) => {
  const { name, email, password } = user;

  try {
    const { data } = await authApi.post(":signUp", {
      email,
      password,
      returnSecureToken: true,
    });
    console.log(data);
    const { idToken } = data;
    await authApi.post(":signUp", {
      displayName: name,
      idToken,
    });
    commit("auth/setToken", idToken);
    return {
      ok: true,
      user: data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: error.response.data.error.message,
    };
  }
};
