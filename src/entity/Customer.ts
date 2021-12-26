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

    @CreateDateColumn({
        type: 'date',
    })
    createdate!: Date;


    @CreateDateColumn({
        type: 'date',
    })
    updatedate!: Date;
}