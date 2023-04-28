import { getAnErrorMessage } from "../../utils/helpers";
import API_BASE_URL from "../../config";

import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const ctx = {
    component: "context/call.loginUser",
    params: { email, password },
  };

  let errorMessage = null;

  try {
    console.log("Trying to login User", { ...ctx });
    const data = { email, password };

    const response = await axios.post(`${API_BASE_URL}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Successfully logged in user", { ...ctx, response });
      return { success: true, data: response.data };
    }

    errorMessage = getAnErrorMessage(response);
  } catch (error) {
    console.error("Unexpected error while loggin in", error);
  }

  return {
    success: false,
    data: errorMessage,
  };
};
