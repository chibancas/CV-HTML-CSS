import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text',{unique:false, nullable:true})
    name:string

    @Column('text',{unique:false, nullable:true})
    email:string

    @Column('text',{unique:false, nullable:true})
    msg:string

}
