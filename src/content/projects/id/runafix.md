---
title: "Platform Runafix"
description: "SaaS manajemen perbaikan handphone yang dirancang untuk efisiensi teknisi, mengurangi birokrasi administrasi agar fokus pada pengerjaan unit."
date: 2024-01-20
techStack: ["Go", "Chi Router", "Sqlx", "PostgreSQL", "React", "Typescript", "TailwindCSS", "Shadcn UI"]
featured: true
lang: "id"
---

# Platform Runafix

Runafix adalah platform manajemen perbaikan perangkat seluler yang dirancang dengan filosofi "teknisi-sentris", di mana administrasi yang rumit dihilangkan agar teknisi dapat fokus sepenuhnya pada perbaikan.

## Fitur Utama

### Manajemen Perbaikan & Antrean
- **Sistem Antrean Pintar**: Pembagian unit service kepada teknisi secara otomatis dan teratur.
- **Pelacakan Pekerjaan**: Monitoring setiap tahap perbaikan secara real-time.
- **Manajemen Perbaikan**: Alur kerja yang disederhanakan untuk input teknis.

### Layanan & Output
- **Pencetakan Faktur**: Dukungan pencetakan faktur dot-matrix menggunakan layanan printer terintegrasi.
- **Manajemen Unit**: Pelacakan status garansi, integrasi refund, dan sistem kompensasi untuk unit yang rusak selama perbaikan.

### Keunggulan Teknis
- Dibangun menggunakan **Autostrada starter kit** untuk fondasi aplikasi yang kokoh dan scalable.
- Backend berkinerja tinggi menggunakan Golang.

## Performa

- **Respon Cepat**: Waktu respon API rata-rata < 50ms untuk alur kerja teknisi yang lancar.
- **Integrasi Hardware**: Komunikasi latensi rendah dengan printer fisik dot-matrix.
- **Skalabilitas**: Mampu menangani ribuan teknisi dan unit service secara bersamaan.

## Tech Stack

- **Framework**: Autostrada Starter Kit (Go)
- **Router**: Chi Router
- **Database**: PostgreSQL (Sqlx)
- **Frontend**: React dengan TypeScript
- **Gaya Visual**: TailwindCSS & Shadcn UI
