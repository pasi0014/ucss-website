export function getAnErrorMessage(response: any) {
  if (typeof response === "string") {
    return response;
  }

  const potentialMessage = [response.error, response.message, response.errors];
  if (typeof response === "object") {
    if (Array.isArray(response.errors) && response.errors.length >= 0) {
      potentialMessage.push(response.errors[0]);
    }

    if (Array.isArray(response.message) && response.message.length >= 0) {
      potentialMessage.push(response.message[0]);
      potentialMessage.push(response.message[0].error);
    }
  }

  // Try to find an error message. If we can't, show a generic message
  return (
    potentialMessage.find((message) => typeof message === "string") ||
    "An error occurred. Please try again."
  );
}

export function getCookieValue(name: string) {
  // Split the cookie string into an array of individual cookies
  const cookies = document.cookie.split(";");

  // Loop through the cookies to find the one with the specified name
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // If the cookie name matches, return its value
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }

  // If the cookie isn't found, return null
  return null;
}
