module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "mailjet",
    providerOptions: {
      publicApiKey: '34c1aa65845b00c9b1eb0c6d384e4219',
      secretApiKey: 'a08d3e2ebcea6ec9c1ac0e8ad0f6c34f',
    },
    settings: {
      defaultFrom: "info@merakiweddingplanner.com",
      defaultFromName: "Contact Us",
    },
    // provider: 'sendgrid',
    // providerOptions: {
    //   apiKey: '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',
    // },
    // settings: {
    //   defaultFrom: 'me@merakiweddingplanner.com',
    //   defaultReplyTo: 'me@merakiweddingplanner.com',
    // },
  },
  // ...
});