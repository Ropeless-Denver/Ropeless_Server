exports.seed = (knex) => {
  return knex.raw('TRUNCATE "user" RESTART IDENTITY CASCADE;') // user is queried with quotes unlike other tables
    .then(() => {
      return knex('user').insert([
        {
          userName: 'AEskenazi',
          email: 'drewesk@gmail.com',
          password: 's3f32f33fsdfsdfdsfsdfff3'
        },
        {
          userName: 'CreativeUserName',
          email: 'CUName@climb.com',
          password: '2sd345f6dg7df7gdfg7df7gg'
        },
        {
          userName: 'AlexHonnold',
          email: 'honnold@climb.com',
          password: '1h2h34nhsdjnsdn232h4b23'
        }
      ]);
    });
};
