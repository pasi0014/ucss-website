import { getAnErrorMessage, getCookieValue } from "../utils/helpers";
import API_BASE_URL from "../config";

import axios from "axios";

export const getStatuses = async () => {
  const ctx = {
    component: `context/calls.getStatuses`,
  };

  let errorMessage = null;

  try {
    console.log("Fetching Statuses", ctx);

    const token = getCookieValue("_auth");

    const response = await axios.get(`${API_BASE_URL}/v1/status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return { success: true, data: response.data };
    }

    errorMessage = getAnErrorMessage(response);
  } catch (error: any) {
    console.error("Unexpected error while trying to fetch Statuses");
  }

  return {
    success: false,
    data: errorMessage,
  };
};
