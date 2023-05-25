import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'users',
})
export class Users extends Model<Users> {
  @Column({
    type: DataType.STRING(45),
    allowNull: false,
  })
  firstname!: string;

  @Column({
    type: DataType.STRING(45),
    allowNull: false,
  })
  lastname!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password!: string;
}
