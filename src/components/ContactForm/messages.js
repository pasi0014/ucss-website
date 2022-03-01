import { defineMessages } from "@formatjs/intl";

const scope = "app.components.ContactForm";

export default defineMessages({
    nameLabel: {
        id: `${scope}.nameLabel`,
        defaultMessage: `Name`
    },
    emailLabel: {
        id: `${scope}.emailLabel`,
        defaultMessage: `Email`
    },
    messageLabel: {
        id: `${scope}.messageLabel`,
        defaultMessage: `Message`,
    },
    namePlaceholder: {
        id: `${scope}.namePlaceholder`,
        defaultMessage: `Please, enter your name`,
    },
    emailPlaceholder: {
        id: `${scope}.emailPlaceholder`,
        defaultMessage: 'Please, enter your email',
    },
    messagePlaceholder: {
        id: `${scope}.messagePlaceholder`,
        defaultMessage: 'Please, enter your message',
    },
})