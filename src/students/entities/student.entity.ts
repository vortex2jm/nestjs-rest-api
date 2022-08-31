import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "students"})
export class Student {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column({type: "decimal", precision: 2, nullable: true})
    media: number;

    @Column()
    registration: number;
}
