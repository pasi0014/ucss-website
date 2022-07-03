import { defineMessages } from "@formatjs/intl";

const scope = "app.pages.Marathon";

export default defineMessages({
  heading: {
    id: `${scope}.heading`,
    defaultMessage:
      "UCSS (Ukrainian Canadian Social Services), Ottawa branch have been invited to participate in the Continental Run Marathon organized by the prestigious Lions Club.",
  },
  date: {
    id: `${scope}.date`,
    defaultMessage: "June 23, 2022",
  },
  article: {
    id: `${scope}.article`,
    defaultMessage: `The Marathon from Chicago to Montreal, Via: London Ontario, Hamilton, Toronto, Kingston, and Ottawa. This is a jubilee - the 10th Anniversary of the Freedom Charity Run. All funds, raised this year, will be donated to help children who have suffered because of Russia's aggression against Ukraine. The event was well supported by the representatives of the embassies of Poland, Germany, Lithuania, Ukraine as well as the mayor’s office of the City of Ottawa. UCSS is very thankful to all the organizers and participants for such an enormous effort raising awareness of survival issue of the genocidal war against Ukrainians and the greatest generous contribution from the Lions Club to the “Sunflower” summer camp for children from Ukraine. With your support we are destined for success. From all our volunteers - sincere, thank you LIONS! {value}
        Thank you so much Nectar Flowers Ottawa for providing us with such wonderful bouquets!`,
  },
  morePicture: {
      id: `${scope}.morePicture`,
      defaultMessage: 'More photos of the event'
  }
});
