import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { SiswaService } from './siswa.service';

@Controller('siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  @Get()
  findAll() {
    return this.siswaService.findAll();
  }

  @Get(':nisn')
  findOne(@Param('nisn') nisn: string) {
    return this.siswaService.findOne(nisn);
  }

  @Post()
  create(
    @Body('nisn') nisn: string,
    @Body('nama') nama: string,
    @Body('alamat') alamat: string,
    @Body('umur') umur: number,
  ) {
    return this.siswaService.create(nisn, nama, alamat, umur);
  }

  @Put(':nisn')
  update(
    @Param('nisn') nisn: string,
    @Body('nama') nama: string,
    @Body('alamat') alamat: string,
    @Body('umur') umur: number,
  ) {
    return this.siswaService.update(nisn, nama, alamat, umur);
  }

  @Delete(':nisn')
  delete(@Param('nisn') nisn: string) {
    const deleted = this.siswaService.delete(nisn);
    if (!deleted) {
      return { message: `Siswa dengan NISN ${nisn} tidak ditemukan` };
    }
    return { message: `Siswa dengan NISN ${nisn} berhasil dihapus` };
  }
}
