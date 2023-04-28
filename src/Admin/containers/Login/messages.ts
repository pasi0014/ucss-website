import { defineMessages } from "@formatjs/intl";

const scope = "app.Admin.containers.Login";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Sign In",
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: "Email Address",
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: "Password",
  },
  memo: {
    id: `${scope}.memo`,
    defaultMessage: "Having issues with login or need to request an access: ",
  },
});
