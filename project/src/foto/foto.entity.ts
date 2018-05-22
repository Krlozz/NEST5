import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('web_gr2_ayala_fotos')
export class FotoEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    url: string;

    @ManyToOne(
        type => UsuarioEntity, usuario => usuario.fotos)

    usuario: FotoEntity[];

}