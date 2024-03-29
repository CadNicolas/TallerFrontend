import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";

const mascotas = db.define("mascotas",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },

    estado:{
        type: Sequelize.STRING,
        allowNull:true
    },

    detalle:{
        type: Sequelize.STRING,
        allowNull:true
    },


    img:{
        type: Sequelize.BLOB,
        allowNull:true
    }
});

export {mascotas}