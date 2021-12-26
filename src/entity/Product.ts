import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Person')
export class Product {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number = 0;

    @Column({
        type: 'nvarchar',
        length: 255,
    })
    name: string = '';

    @Column({
        type: 'int',
        length: 255,
    })
    price: string = '';

    @CreateDateColumn({
        type: 'date',
    })
    createdate!: Date;


    @CreateDateColumn({
        type: 'date',
    })
    updatedate!: Date;
}