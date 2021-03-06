import {Injectable} from "@nestjs/common";

const jwtPaquete = require('jsonwebtoken');

@Injectable()
export class JwtService {
    private readonly jwt = jwtPaquete;
    private readonly secreto = 'el sol no quema tanto';
    private readonly opciones = {
        expiresIn: '30s'
    };

    emitirToken(payload: any) {
        return this.jwt
            .sign(
                payload,
                this.secreto,
                this.opciones
            );
    }

    verificarTokenSync(token: string): boolean {   // forma sincrona
        try {
            return this.jwt
                .verify(
                    token,
                    this.secreto
                )
        } catch (e) {
            return false;
        }
    }

    verificarTokenAsync(token: string, callback) {
        this.jwt
            .verify(
                token,
                this.secreto,
                callback
            )
    }

}