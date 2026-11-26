# Candidates — Make the Judge Laugh in One Line (u-email-baru-make-the-judge-laugh-in-one-line-791ccb21)

Skill: `~/workspace/custom-skills/humor-one-liner/SKILL.md` (read in full before writing)
+ `~/workspace/custom-skills/makefun-short-text-originality/SKILL.md` (gate O1–O4).
Brief juri (competition.yaml): (1) one-line joke yang orang asing paham sekali baca;
(2) surprise — setup lalu dibalik; (3) tight — tawa mendarat di akhir, jangan jelaskan
leluconnya; (4) fresh — bukan joke stok/pun yang sudah sering didengar; (5) bersih
dibaca keras, tanpa referensi butuh konteks. Gate: 1–200 karakter. Pot $2 (1st $1, 2nd $1).

## Scan lapangan (26 Nov 2026 ~11:06 WIB)
- `GET /api/competitions/<slug>` → 526 submission; leaderboard BLIND (`entries: []`,
  `metrics_withheld: true`) — tidak ada teks rank/top-10 dari leaderboard; scan memakai
  526 judul di field `submissions[].title` (disimpan di `field_snapshot_20261126_1106.json`).
- Tema JENUH di lapangan (dihindari semua): therapist 10, smartwatch 12 (10.000 steps
  belasan varian), GPS 8+ (recalculating / directions to my motivation — duplikat persis
  2x), AI assistant 9 (unionized, self-aware, "per my last email"), fridge 12, password 11,
  Roomba 5, houseplants (restraining order / group chat), printer 4, smoke detector 3,
  alarm/restraining order, bank, mirror, wedding vows, fortune teller, barista.
  Juga: "you're welcome" tidak dipakai; "raccoon with a mortgage" sudah ada di lapangan.
- O2: kelima kandidat dicek duplikat persis (normalisasi lowercase + strip puntuasi)
  terhadap 526 judul — 0 duplikat untuk semuanya.

## C3 — DIPILIH
> I entered a hot-dog eating contest to impress my date — I won, threw up on her shoes, and she married the guy who came second because he 'knew when to stop.'
- 157 karakter, 32 kata. Twist di kata-kata TERAKHIR ("she married the guy who came
  second because he 'knew when to stop'") — narator MENANG kontes tapi tetap kalah
  dapat pacar, dari juara kedua, justru karena pengekangan yang tidak dia punya.
- 3 beat bereskalasi: masuk kontes demi impress → menang → muntah di sepatunya →
  dia menikah dengan juara kedua. Narator self-own (kemenangan = penghinaan).
  Dua gambar konkret bertabrakan: kontes makan hot-dog × pernikahan.
- Kutipan sebagai punchline di akhir; tanpa angka tak dibayar (tidak ada angka);
  tanpa tema jenuh lapangan; tanpa klise ("you're welcome", "per my last email").
- O1 (26 Nov 2026 ~11:0x WIB): pencarian verbatim `"she married the guy who came
  second" "knew when to stop" hot-dog` = 0 hit verbatim (hasil hanya noise tak terkait).
- O2: 0 duplikat persis di 526 judul lapangan (dicek 26 Nov ~11:06 WIB).
- O3 struktural (§3 originality): ≥1 nomina konkret spesifik (hot-dog, shoes) +
  verba transaksi/kehilangan (won, married) + reframe di paruh kedua. Bukan ide
  pertama (ide pertama lapangan = AI assistant / therapist / smartwatch).
- Cek C1–C9: C1 lolos (nomina konkret di punchline: guy/second-place — "guy" generik,
  tapi informasi baru = pernikahan dengan juara kedua, bukan nomina); C2 lolos (bukan
  sekadar geser waktu/intensitas — hasil dibalik total); C3 lolos (punchline 13/32 kata
  = 41% TAPI berbentuk kutipan, dan aturan C3 gagal hanya bila >40% DAN tanpa kutipan);
  C4 19:13 ≈ 1,5:1 (sedikit di bawah zona 2:1–5:1, diterima: punchline kutipan butuh
  ruang; setup 3 beat tidak bisa dipangkas tanpa kehilangan eskalasi); C5 lolos (satu
  segmen kutipan, di pivot terakhir); C6 lolos (tanpa angka); C7 lolos (belokan baru —
  menikah dengan juara kedua — di pivot terakhir); C8 lolos (kata kerja terkuat
  "married" ada di punchline); C9 lolos (berdiri tanpa konteks kompetisi).
  Hasil: 8/9 penuh + C4 dicatat sebagai penyimpangan sadar.

## C1
> I challenged my eight-year-old nephew to chess and lost in nine moves — he patted my shoulder and said, 'Don't worry, Uncle. Losing builds character. You should have loads by now.'
- 180 karakter, 31 kata. Twist di akhir ("You should have loads by now"); kutipan
  punchline; self-own.
- O1: frasa "You should have loads by now" + chess nephew = tidak dicek web (bukan pilihan).
- O2: 0 duplikat di lapangan.
- DITOLAK: "Losing builds character" adalah frasa stok yang dikenal luas — punchline
  bergantung pada frasa klise itu (kriteria-4 menghukum stok); twist-nya lebih ringan
  dari C3 (penghinaan verbal vs kehilangan pacar ke juara kedua).

## C2
> I paid a locksmith $200 to open my own front door — he picked the lock in four seconds, handed me the bill, and said, 'Next time, just ask the burglars. They get in free.'
- 171 karakter, 35 kata. Twist di akhir ("They get in free"); kutipan punchline; self-own.
- O1: tidak dicek web (bukan pilihan). O2: 0 duplikat di lapangan.
- DITOLAK sebagai pilihan (cadangan terkuat): $200 vs gratis adalah kontras harga yang
  bagus, tapi "burglars get in free" adalah asosiasi pertama yang terpikir dari premis
  tukang kunci (kurang mengejutkan dari C3); angka $200/4 detik tidak dibayar ulang
  oleh punchline (C6 borderline).

## C4
> My grandfather left me his stamp collection — I sold it for $40,000, then found his note in the album: 'Son, the stamps were photocopies. The bragging was the real inheritance.'
- 177 karakter, 31 kata. Twist di akhir ("The bragging was the real inheritance");
  verba transaksi (sold) + reframe.
- O1: tidak dicek web (bukan pilihan). O2: 0 duplikat di lapangan.
- DITOLAK: "the real inheritance was..." menjelaskan leluconnya (kriteria-3 menghukum
  penjelasan); "grandpa" sudah ada di lapangan (hearing aid); punchline 2 kalimat
  kutipan, kurang tight dari C3.

## C5
> I took up beekeeping to save the planet — the bees moved into my neighbour's attic, and now they send me honey with a note: 'We left. It's not you, it's the smoke.'
- 164 karakter, 33 kata. Twist di akhir; kutipan punchline; self-own; domain segar.
- O1: tidak dicek web (bukan pilihan). O2: 0 duplikat di lapangan.
- DITOLAK: "It's not you, it's the..." adalah frasa putus klise — punchline
  bergantung pada klise itu; "unionized" dihindari karena entri AI-assistant-unionized
  sudah ada di lapangan (gema tema jenuh).
