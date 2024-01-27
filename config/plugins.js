module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      defaultLimit: 80,
      maxLimit: 160,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },
});
