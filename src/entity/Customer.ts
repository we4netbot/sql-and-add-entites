import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Customer')
export class Customer {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number = 0;

    @Column({
        type: 'nvarchar',
        length: 255,
    })
    firstname: string = '';

    @Column({
        type: 'int',
        length: 255,
    })
    lastname: string = '';

    @Column({
        type: 'simple-json'
    })
    carts: {
        name: string;
        totalprice: number;
    } = {
            name: '',
            totalprice: 0
        }

    @CreateDateColumn({
        type: 'date',
    })
    createdate!: Date;


    @CreateDateColumn({
        type: 'date',
    })
    updatedate!: Date;


}