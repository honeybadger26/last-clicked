module.exports = {
  env: {
    api: {
      server: 'http://api:3001',
      client: 'http://localhost:3001',
    }
  },
  webpack: (config, _) => ({
    ...config,
    watchOptions: { ...config.watchOptions, aggregateTimeout: 300, poll: 800 },
  }),
};
