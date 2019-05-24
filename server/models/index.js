import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

const db = {
  User: sequelize.import('./user'),
  Post: sequelize.import('./post'),
};

db.sequelize = sequelize;

export default db;
