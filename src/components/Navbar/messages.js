import { defineMessages } from "@formatjs/intl";

const scope = "app.components.NavBar";

export default defineMessages({
    home: {
        id: `${scope}.home`,
        defaultMessage: 'Home'
    },
    about: {
        id: `${scope}.about`,
        defaultMessage: "About",
    },
    howWeCanHelpYou: {
        id: `${scope}.howWeCanHelpYou`,
        defaultMessage: 'How We Can Help You'
    },
    donate: {
        id: `${scope}.donate`,
        defaultMessage: `Donate`,
    },
    stories: {
        id: `${scope}.stories`,
        defaultMessage: 'Stories'
    },
    contact: {
        id: `${scope}.contact`,
        defaultMessage: `Contact`,
    },
})