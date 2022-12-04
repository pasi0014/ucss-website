import { defineMessages } from "@formatjs/intl";

const scope = "app.components.WaitingList";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Register",
  },
  details: {
    id: `${scope}.details`,
    defaultMessage: `We are extremely glad that we managed to successfully organize the "Sunflower Camp" for displaced children from Ukraine. Unfortunately, we could not accommodate all the children who wanted to attend the camp. Therefore, we are planning additional activities for these children, as well as for children who have recently arrived in Ottawa. If you would like to be placed on our waiting list, please fill out our form.`,
  },
  detailsRegister: {
    id: `${scope}.detailsRegister`,
    defaultMessage: `UCSS are planning additional activities for displaced children from Ukraine. If you would like to register for the events, please fill out our form.`,
  },
  ctaButton: {
    id: `${scope}.ctaButton`,
    defaultMessage: "Register",
  },
  backcpacksTitle: {
    id: `${scope}.backpacksTitle`,
    defaultMessage:
      "Get ready for school with Free backpack with school supplies",
  },
  backpack_1: {
    id: `${scope}.backpack_1`,
    defaultMessage: `To receive these suplies you need to register on our waiting list
    and in the message section mention that you would like to get a
    backpack. There are options available for both girls and boys.`,
  },
  backpack_2: {
    id: `${scope}.backpack_2`,
    defaultMessage: `Make sure to also include name of the kid and parent information,
    so we could contact you to give you the supplies.`,
  },
  waitingListTitle: {
    id: `${scope}.waitingListTitle`,
    defaultMessage:
      "Please, enter children name, age and parents contact information",
  },
  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: "Parent / Guardian name",
  },
  agePlaceholder: {
    id: `${scope}.agePlaceholder`,
    defaultMessage: "Enter kids age",
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
