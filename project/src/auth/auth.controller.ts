import {BadRequestException, Body, Controller, Post} from "@nestjs/common";

@Controller('Auth')
export class AuthController {
    @Post('emitir')
    emitirToken(
        @Body('usuario') usuario,
        @Body('password') password,
    ) {
        const enviaParametros = usuario && password;
        if (enviaParametros) {
            if(usuario === 'adrianeguez' && password === '1234') {

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