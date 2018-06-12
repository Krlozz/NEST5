import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('Auth')
export class AuthController {

     constructor(private _jwtService: JwtService) {}


    @Post('emitir')
    emitirToken(
        @Body('usuario') usuario,
        @Body('password') password,
    ) {
        const enviaParametros = usuario && password;
        if (enviaParametros) {
            const credencialesValidas = usuario === 'adrianeguez' && password === '1234';
            if(credencialesValidas) {
                return {
                    jwt: this._jwtService.emitirToken({usuario: usuario})
                }
            } else {
                throw new BadRequestException({
                    mensaje:'Credenciales invalidas'
                });
            }
        } else {
            throw new BadRequestException({
                mensaje:'No envia parametros'
            });
        }
    }

    @Post('verificarSync')
    emitirToken() {

    }

    @Post('verificarAsync')
    emitirToken() {

    }

}