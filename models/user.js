import {DataTypes} from 'sequelize';
import sequelize from './db.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
    },
    userLogin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    userUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'users',
    timestamps: false,
});