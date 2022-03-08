import { defineMessages } from "@formatjs/intl";

const scope = "app.pages.NotFound";

export default defineMessages({
    title: {
        id: `${scope}.title`,
        defaultMessage: "Oops! ",
    },
    pageNotFound: {
        id: `${scope}.pageNotFound`,
        defaultMessage: "Page not found",
    },
    pageNotFoundDescription: {
        id: `${scope}.pageNotFoundDescription`,
        defaultMessage: "The page you are looking for does not exist.",
    },
    backToHome: {
        id: `${scope}.backToHome`,
        defaultMessage: "Go to home",
    },
});