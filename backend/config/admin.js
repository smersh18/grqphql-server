module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4eb065dc719b74dd5a066a506032cd56'),
  },
});
