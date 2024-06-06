"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = exports.Signature = exports.Document = exports.User = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://username:password@localhost:5432/digital_signing_tool');
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    user_id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    created_at: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize, modelName: 'user' });
class Document extends sequelize_1.Model {
}
exports.Document = Document;
Document.init({
    document_id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    content: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    created_at: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    created_by: { type: sequelize_1.DataTypes.INTEGER, references: { model: User, key: 'user_id' } },
    required_signatures: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
}, { sequelize, modelName: 'document' });
class Signature extends sequelize_1.Model {
}
exports.Signature = Signature;
Signature.init({
    signature_id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    document_id: { type: sequelize_1.DataTypes.INTEGER, references: { model: Document, key: 'document_id' } },
    user_id: { type: sequelize_1.DataTypes.INTEGER, references: { model: User, key: 'user_id' } },
    signature: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    field_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    signed_at: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize, modelName: 'signature' });
class Field extends sequelize_1.Model {
}
exports.Field = Field;
Field.init({
    field_id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    document_id: { type: sequelize_1.DataTypes.INTEGER, references: { model: Document, key: 'document_id' } },
    field_name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    field_type: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    required: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true },
}, { sequelize, modelName: 'field' });
