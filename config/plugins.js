module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "mailjet",
    providerOptions: {
      publicApiKey: env(MAILJET_PUBLIC_KEY),
      secretApiKey: env(MAILJET_SECRET_KEY),
    },
    settings: {
      defaultFrom: "info@merakiweddingplanner.com",
      defaultFromName: "Contact Us",
    },  
  },
});