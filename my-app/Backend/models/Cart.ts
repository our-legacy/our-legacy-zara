import { Table, Model, Column, ForeignKey, DataType } from 'sequelize-typescript';
import { Users } from './Users';
import { Products } from './Products';

@Table({
  timestamps: false,
  tableName: 'cart',
})
export class Cart extends Model<Cart> {
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  users_id!: number;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  products_id!: number;
}
