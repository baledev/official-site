---
title: "Mengapa Saya Memilih Astro untuk Membangun Portfolio Ini"
description: "Alasan teknis dan performa di balik keputusan menggunakan Astro sebagai framework utama untuk website portfolio dan blog ini."
pubDate: 2026-01-17
author: "Hermansyah"
tags: ["astro", "teknologi", "web performance"]
coverImage: ""
---

# Mengapa Astro?

Dalam dunia pengembangan web modern, kita dimanja dengan banyak pilihan framework: Next.js, Remix, SvelteKit, Nuxt, dan banyak lagi. Namun, untuk website portfolio dan blog ini, saya menjatuhkan pilihan pada **Astro**. Mengapa?

## 1. Performa "Islands Architecture"

Astro menggunakan pendekatan unik yang disebut *Islands Architecture*. Berbeda dengan SPA (Single Page Application) tradisional yang mengirimkan bundel JavaScript besar ke browser, Astro secara default merender HTML statis.

> "Kirim HTML, bukan JavaScript."

Bagian interaktif (seperti toggle tema gelap atau menu mobile) hanya dimuat saat dibutuhkan. Ini membuat website sangat cepat, bahkan pada koneksi lambat.

## 2. Konten dengan Markdown dan MDX

Sebagai seorang developer, menulis konten dalam format **Markdown** adalah kenikmatan tersendiri. Astro memiliki dukungan kelas satu untuk Markdown dan MDX (Markdown + JSX).

Saya bisa menulis kode seperti ini langsung di dalam artikel:

```javascript
function helloWorld() {
  console.log("Halo, Astro!");
}
```

Dan hasilnya akan otomatis di-highlight dengan indah.

## 3. Agnostik Framework (UI-Agnostic)

Salah satu fitur favorit saya adalah kemampuan Astro untuk "membawa framework UI sendiri". Saya bisa menggunakan komponen React, Vue, Svelte, atau SolidJS di dalam satu proyek Astro.

Misalnya, jika saya butuh komponen interaktif yang kompleks, saya bisa menulisnya dengan React:

```jsx
// src/components/Counter.jsx
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Lalu menggunakannya di file `.astro` dengan direktif hidrasi:

```astro
---
import Counter from '../components/Counter.jsx';
---

<Counter client:load />
```

## Kesimpulan

Astro memberikan keseimbangan sempurna antara performa situs statis dan fleksibilitas komponen dinamis. Untuk situs berbasis konten seperti blog dan portfolio, Astro adalah pilihan yang sulit dikalahkan saat ini.

Tertarik mencoba? Kunjungi [dokumentasi resmi Astro](https://astro.build).
