import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'products',
})
export class Products extends Model<Products> {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(45),
    allowNull: false,
  })
  gender!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price!: number;

  @Column({
    type: DataType.STRING(500),
    allowNull: false,
  })
  image!: string;

  @Column({
    type: DataType.STRING(500),
    allowNull: false,
  })
  description!: string;
}
