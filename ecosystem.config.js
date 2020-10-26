module.exports = {
  apps: [
    {
      args: ['--color'],
      name: 'Express API',
      script: './server.js',
      watch: ['server.js', 'api'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
