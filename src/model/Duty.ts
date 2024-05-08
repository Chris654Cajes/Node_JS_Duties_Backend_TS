import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: Duty.DUTY_TABLE_NAME,
    timestamps: false
})
export class Duty extends Model {
    public static DUTY_TABLE_NAME = "duty" as string;
    public static DUTY_ID = "id" as string;
    public static DUTY_NAME = "name" as string;


    @Column({
        type: DataType.STRING(8),
        primaryKey: true,
        field: Duty.DUTY_ID
    })
    id!: string;

    @Column({
        type: DataType.STRING(255),
        field: Duty.DUTY_NAME
    })
    name!: string;
}