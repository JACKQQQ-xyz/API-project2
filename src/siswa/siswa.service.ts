import { Injectable } from '@nestjs/common';
import { Siswa } from './siswa.interface';

@Injectable()
export class SiswaService {
  private siswa: Siswa[] = [
    {
      nisn: '1234567890',
      nama: 'Budi Santoso',
      alamat: 'Jl. Merdeka No.10',
      umur: 17,
    },
    {
      nisn: '0987654321',
      nama: 'Siti Aminah',
      alamat: 'Jl. Sudirman No.5',
      umur: 16,
    },
  ];

  findAll(): Siswa[] {
    return this.siswa;
  }

  findOne(nisn: string): Siswa | undefined {
    return this.siswa.find((s) => s.nisn === nisn);
  }

  create(nisn: string, nama: string, alamat: string, umur: number): Siswa {
    const newSiswa: Siswa = { nisn, nama, alamat, umur };
    this.siswa.push(newSiswa);
    return newSiswa;
  }

  update(
    nisn: string,
    nama: string,
    alamat: string,
    umur: number,
  ): Siswa | undefined {
    const siswa = this.findOne(nisn);
    if (siswa) {
      siswa.nama = nama;
      siswa.alamat = alamat;
      siswa.umur = umur;
    }
    return siswa;
  }

  delete(nisn: string): boolean {
    const index = this.siswa.findIndex((s) => s.nisn === nisn);
    if (index === -1) return false;
    this.siswa.splice(index, 1);
    return true;
  }
}
