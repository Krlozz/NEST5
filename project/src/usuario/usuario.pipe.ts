import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {USUARIO_SCHEMA} from "./usuario.schema";
import * as Joi from 'joi';

@Injectable()
export class  UsuarioPipe implements PipeTransform{

    constructor(private readonly schema) {}     // readonly => solo se pueda leer

    transform(valorEnBrutoDelRequest: any, metadataDeLosDecoradoresDelNestjs: ArgumentMetadata) {

        //this.schema = USUARIO_SCHEMA;

        const {
            error
        } = Joi.validate(valorEnBrutoDelRequest    // objeto a validar
            ,this.schema);                         // un esquema


        if (error) {
            throw new BadRequestException(error)
        }
        return valorEnBrutoDelRequest;

    }




}