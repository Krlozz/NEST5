import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";

@Injectable()
export class  UsuarioPipe implements PipeTransform{

    constructor(private readonly schema) {}     // readonly => solo se pueda leer

    transform(valorEnBrutoDelRequest: any, metadataDeLosDecoradoresDelNestjs: ArgumentMetadata): R {
        return undefined;
    }




}