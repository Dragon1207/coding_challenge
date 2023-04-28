'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Art extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Art.hasMany(models.Comment, {
        as: "comments",
        foreignKey: "art_id",
      })
    }
  }
  Art.init({
    accession_number: {
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
    },
    artistRole: {
      type: DataTypes.STRING,
    },
    artistId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING(500),
      defaultValue: "[no title]"
    },
    dateText: {
      type: DataTypes.STRING,
    },
    medium: {
      type: DataTypes.STRING,
    },
    creditLine: {
      type: DataTypes.TEXT,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    acquisitionYear: {
      type: DataTypes.INTEGER,
    },
    dimensions: {
      type: DataTypes.STRING,
    },
    width: {
      type: DataTypes.FLOAT,
    },
    height: {
      type: DataTypes.FLOAT,
    },
    depth: {
      type: DataTypes.FLOAT,
    },
    units: {
      type: DataTypes.STRING,
    },
    inscription: {
      type: DataTypes.STRING,
    },
    thumbnailCopyright: {
      type: DataTypes.TEXT,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Art',
    tableName: 'arts',
    timestamps: false,
  });
  return Art;
};