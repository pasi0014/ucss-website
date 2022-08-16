import { defineMessages } from "@formatjs/intl";

const scope = "app.components.WaitingList";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Register for our waiting list",
  },
  details: {
    id: `${scope}.details`,
    defaultMessage: `We are extremely glad that we managed to successfully organize the "Sunflower Camp" for displaced children from Ukraine. Unfortunately, we could not accommodate all the children who wanted to attend the camp. Therefore, we are planning additional activities for these children, as well as for children who have recently arrived in Ottawa. If you would like to be placed on our waiting list, please fill out our form.`,
  },
  ctaButton: {
    id: `${scope}.ctaButton`,
    defaultMessage: "Register",
  },
  waitingListTitle: {
    id: `${scope}.waitingListTitle`,
    defaultMessage:
      "Please, enter children name, age and parents contact information",
  },
  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: "Enter full name",
  },
  agePlaceholder: {
    id: `${scope}.agePlaceholder`,
    defaultMessage: "Enter age",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter email",
  },
  messagePlaceholder: {
    id: `${scope}.messagePlaceholder`,
    defaultMessage: "Enter message",
  },
  errorName: {
    id: `${scope}.errorName`,
    defaultMessage: "Please enter full name",
  },
  errorAge: {
    id: `${scope}.errorAge`,
    defaultMessage: "Age is required",
  },
  emptyEmail: {
    id: `${scope}.emptyEmail`,
    defaultMessage: "Please enter your email",
  },
  invalidEmail: {
    id: `${scope}.invalidEmail`,
    defaultMessage:
      "Entered email is invalid, please try again. E.g john.doe@mail.com",
  },
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: "Please, enter your message",
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: "Submit",
  },
  reset: {
    id: `${scope}.reset`,
    defaultMessage: "Reset",
  },
  success: {
    id: `${scope}.success`,
    defaultMessage: "Message sent successfully.",
  },
  error: {
    id: `${scope}.error`,
    defaultMessage:
      "There was an error while trying to send an email. Please, try again later",
  },
});
