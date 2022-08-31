module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f7c1a393934f811aefef4a9214b62094'),
    },
  },
});
