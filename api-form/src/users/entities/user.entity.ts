import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text',{unique:false, nullable:true})
    name:string

    @Column('text',{unique:true, nullable:true})
    email:string

    @Column('text',{unique:false, nullable:false})
    msg:string

}
