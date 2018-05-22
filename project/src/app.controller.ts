import {Get, Controller, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";
import {UsuarioPipe} from "./usuario/usuario.pipe";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Post('Crear')
  crear(@Body(new UsuarioPipe(USUARIO_SCHEMA))usuario) {

    console.log('Usuario correcto');
    return usuario;

  }
}
