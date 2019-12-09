const config = {
  dsn: "https://e51d2e0b6c49473d9db2ddfe1743ad2e@sentry.io/1847143",
  debug: true,

  // Por padrão, o SDK tentará ler esse valor da variável de ambiente SENTRY_ENVIRONMENT
  environment: "staging",

  release: "my-project-name@2.3.12"
};

module.exports = config;
