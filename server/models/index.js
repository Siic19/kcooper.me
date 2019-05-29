import Sequelize from 'sequelize';

let sequelize = null;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL,
    {
      dialect: "postgres",
      protocol: "postgres",
      port: process.env.DB_PORT,
      host: process.env.DATABASE_URL,
      logging: false
    }
  );
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_URL,
      dialect: 'postgres',
    },
  );
}

const db = {
  User: sequelize.import('./user'),
  Post: sequelize.import('./post'),
};

db.sequelize = sequelize;

export default db;
