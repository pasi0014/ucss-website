import { defineMessages } from "@formatjs/intl";

const scope = "app.components.ContactForm";

export default defineMessages({
    contactUs: {
        id: `${scope}.contactUs`,
        defaultMessage: "Contact Form",
    },
    contactUsSubtitle: {
        id: `${scope}.contactUsSubtitle`,
        defaultMessage: "We will get back to you as soon as possible",
    },
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
    success: {
        id: `${scope}.success`,
        defaultMessage: 'Your message has been sent successfully',
    },
    error: {
        id: `${scope}.error`,
        defaultMessage: 'Something went wrong, please try again later',
    },
    send: {
        id: `${scope}.send`,
        defaultMessage: 'Send',
    },
    clear: {
        id: `${scope}.clear`,
        defaultMessage: 'Clear',
    }
})