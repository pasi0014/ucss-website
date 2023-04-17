import { createClient } from 'contentful';

export const client = createClient({
    space: "nsh1rgbpuq0v",
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN as string,
})
