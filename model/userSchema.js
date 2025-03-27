import { DataTypes } from "sequelize";

export const createUserModel = async (sequelize) => {
  const User = sequelize.define('viagem', {
    pais: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    local: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quando: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    url_bandeira: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true, 
  });

  return User;
};
