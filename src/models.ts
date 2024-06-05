import { DataTypes, Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://username:password@localhost:5432/digital_signing_tool');

class User extends Model {}
User.init({
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'user' });

class Document extends Model {}
Document.init({
  document_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  created_by: { type: DataTypes.INTEGER, references: { model: User, key: 'user_id' } },
  required_signatures: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, modelName: 'document' });

class Signature extends Model {}
Signature.init({
  signature_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  document_id: { type: DataTypes.INTEGER, references: { model: Document, key: 'document_id' } },
  user_id: { type: DataTypes.INTEGER, references: { model: User, key: 'user_id' } },
  signature: { type: DataTypes.TEXT, allowNull: false },
  field_name: { type: DataTypes.STRING, allowNull: false },
  signed_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'signature' });

class Field extends Model {}
Field.init({
  field_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  document_id: { type: DataTypes.INTEGER, references: { model: Document, key: 'document_id' } },
  field_name: { type: DataTypes.STRING, allowNull: false },
  field_type: { type: DataTypes.STRING, allowNull: false },
  required: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { sequelize, modelName: 'field' });

export { User, Document, Signature, Field };
