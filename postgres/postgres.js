import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";

const sequelize = new Sequelize('estagio', 'postgres', 'Artorias', {
  host: 'localhost',
  dialect: 'postgres',
});

let UserModel = null;

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados bem-sucedida!");

    UserModel = await createUserModel(sequelize);

    await sequelize.sync();
    console.log("Banco de dados sincronizado.");
  } catch (error) {
    console.error("Falha na conexão com o banco de dados:", error.message);
  }
};

export { connection, UserModel };
