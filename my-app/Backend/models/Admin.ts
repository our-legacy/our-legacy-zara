import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps:false,
    tableName:'admin'
})
export class Admin extends Model<Admin>{
    @Column({
        type:DataType.STRING(45),
        allowNull:false,
})
name!:string;
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