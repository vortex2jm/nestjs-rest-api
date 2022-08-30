import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Decorator
@Controller('test')
export class AppController {
  
  // Injeção de dependência
  constructor(private readonly appService: AppService) {}

  // Para usar outro método deve-se importar
  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }
  
}
