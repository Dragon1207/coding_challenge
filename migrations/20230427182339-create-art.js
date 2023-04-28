'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('arts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accession_number: {
        type: Sequelize.STRING,
      },
      artist: {
        type: Sequelize.STRING,
      },
      artistRole: {
        type: Sequelize.STRING,
      },
      artistId: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(500),
        defaultValue: "[no title]"
      },
      dateText: {
        type: Sequelize.STRING,
      },
      medium: {
        type: Sequelize.STRING,
      },
      creditLine: {
        type: Sequelize.TEXT,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      acquisitionYear: {
        type: Sequelize.INTEGER,
      },
      dimensions: {
        type: Sequelize.STRING,
      },
      width: {
        type: Sequelize.FLOAT,
      },
      height: {
        type: Sequelize.FLOAT,
      },
      depth: {
        type: Sequelize.FLOAT,
      },
      units: {
        type: Sequelize.STRING,
      },
      inscription: {
        type: Sequelize.STRING,
      },
      thumbnailCopyright: {
        type: Sequelize.TEXT,
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('arts');
  }
};