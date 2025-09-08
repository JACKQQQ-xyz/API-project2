import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SiswaController } from './siswa/siswa.controller';
import { SiswaService } from './siswa/siswa.service';
import { SiswaModule } from './siswa/siswa.module';

@Module({
  imports: [SiswaModule],
  controllers: [AppController, SiswaController],
  providers: [AppService, SiswaService],
})
export class AppModule {}
