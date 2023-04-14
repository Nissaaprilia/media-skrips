const questions = [
  {
    question: 'Jaiz artinya boleh. Dalam istilah tajwid hukum bacaan mad jaiz munfasil boleh dipanjangkan seperti membaca hukum bacaan mad....',
    answers: {
      a: 'Farqi',
      b: 'Thabi`i',
      c: 'Wajib Muttasil',
      d: 'Jaiz Munfasil',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Perhatikan ayat berikut!<span class="arab_tebal">فَ<span style="color: #ec008b ;">لَآ أُ</span>قْسِمُ بِٱلشَّفَقِ</span>, Lafaz yang di berwarna termasuk hukum bacaan ....',
    answers: {
      a: 'Mad Thabi`i',
      b: 'Mad Layyin',
      c: 'Mad Wajib Muttasil',
      d: 'Mad Jaiz Munfasil',
    },
    correctAnswer: 'd',
  },
  {
    question: 'Lafaz yang termasuk hukum bacaan Mad Thabi’i di bawah ini adalah ....',
    answers: {
      a: '<span class="arab_tebal">لَأُآعْبُدُ</span>',
      b: '<span class="arab_tebal">أَضَآ ءَتْ</span>',
      c: '<span class="arab_tebal">عَائِلً</span>',
      d: '<span class="arab_tebal">وَالتِّيْنِ</span>',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Lafaz di bawah ini cara membacanya harus dipanjangkan sebanyak lima harakat atau dua setengah alif, yaitu ....',
    answers: {
      a: '<span class="arab_tebal">وَنَكُمْ لِقَاءَ</span>',
      b: '<span class="arab_tebal">لَأُآعْبُدُ</span>',
      c: '<span class="arab_tebal">فَيَقُوْلُ</span>',
      d: '<span class="arab_tebal">لَقَدْجَاءَكُمْ</span>',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Ketika ada alif didahului huruf berharakat fathah dan bertemu hamzah didepannya, disebut hukum bacaan ....',
    answers: {
      a: 'Mad Thabi’i',
      b: 'Mad Wajib Muttasil',
      c: 'Mad Lazim Mukhaffaf Kilmi',
      d: 'Mad Jaiz Munfasil',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Dengarkan baik-baik contoh bunyi bacaan berikit ini!<br><br> ....',
    answers: {
      a: 'Mad Thabi’i',
      b: 'Mad Wajib Muttasil',
      c: 'Mad Lazim Mukhaffaf Kilmi',
      d: 'Mad Jaiz Munfasil',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Ketentuan yang benar untuk hukum bacaan Mad Wajib Muttasil adalah ....',
    answers: {
      a: 'Salah satu huruf Mad Thabi’i diikuti huruf hamzah di lain kata',
      b: 'Waw sukun di dahului oleh huruf berharakat kasrah',
      c: 'Ya sukun didahului huruf berharakat kasrah',
      d: 'Mad Thabi’i bertemu dengan huruf hamzah pada satu kata',
    },
    correctAnswer: 'd',
  },
  {
    question: 'Perhatikan potongan ayat berikut ini!<span class="arab_tebal">وَإِنَّا إِلَى</span>Hukum bacaan yang terapat pada ayat di atas ialah Mad Jaiz Munfasil. Karena ....',
    answers: {
      a: '<span class="arab_tebal">( ا ) bertemu ( ء )</span>',
      b: '<span class="arab_tebal">( يْ ) bertemu ( ء )</span>',
      c: '<span class="arab_tebal">(وْ ) bertemu ( ء )</span>',
      d: '<span class="arab_tebal">(وْ ) bertemu ( ُ )</span>',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Dengarkan baik-baik contoh bunyi bacaan berikit ini!<br><br><audio id="cth_1"><source src="audio/idghombi1.aac" type="audio/aac">Your browser does not support the audio element.</audio> ....',
    answers: {
      a: 'Mad Thabi’i',
      b: 'Mad Jaiz Munfasil',
      c: 'Mad Wajib Muttasil',
      d: 'Mad Layyin',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Lafaz berikut yang termasuk hukum bacaan Mad Jaiz Munfasil adalah ....',
    answers: {
      a: '<span class="arab_tebal">نِسَآءَنَا</span>',
      b: '<span class="arab_tebal">مَآءَ</span>',
      c: '<span class="arab_tebal">جَزَآءَ</span>',
      d: '<span class="arab_tebal">أَمِرُوْاإِلاَّ</span>',
    },
    correctAnswer: 'd',
  },
  {
    question: 'Mad asli adalah nama lain dari ....',
    answers: {
      a: 'Mad Wajib',
      b: 'Mad Lazim',
      c: 'Mad Thabi`i',
      d: 'Mad Iwad',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Syarat terjadinya hukum bacaan Mad Jaiz Munfasil adalah Mad Thabi`i yang bertemu dengan ....',
    answers: {
      a: 'Alif di lain kata',
      b: 'Alif di satu kata',
      c: 'Hamzah di satu kata',
      d: 'Hamzah di lain kata',
    },
    correctAnswer: 'd',
  },
  {
    question: 'Huruf-huruf mad yang benar adalah ....',
    answers: {
      a: 'Waw berharakat sukun di dahului huruf berharakat fathah',
      b: 'Waw berharakat sukun di dahului huruf berharakat kasrah',
      c: 'Ya beharakat sukun di dahului huruf berharakat fathah',
      d: 'Ya berharakat sukun di dahului huruf berharakat kasrah',
    },
    correctAnswer: 'd',
  },
  {
    question: 'Pada ayat berikut terdapat hukum bacaan Mad Jaiz Munfasil sebanyak .... lafaz <br><br><br> <span class="arab_tebal">وَلَآ اَنْتُمْ عٰبِدُوْنَ مَآ اَعْبُدُۚ</span>',
    answers: {
      a: 'Dua',
      b: 'Tiga',
      c: 'Empat',
      d: 'Lima',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Pada lafaz <span class="arab_tebal">نِسَآءَ</span> harus dipanjangkan sebanyak.... harakat',
    answers: {
      a: 'Dua',
      b: 'Tiga',
      c: 'Empat',
      d: 'Lima',
    },
    correctAnswer: 'd',
  },
  {
    question: 'Ketentuan dari Mad Wajib Muttasil adalah Ketika ada Mad Thabi’i bertemu hamzah pada  ....',
    answers: {
      a: 'Satu Kalimat',
      b: 'Satu kata',
      c: 'Dua kalimat',
      d: 'Satu ayat',
    },
    correctAnswer: 'b',
  },
  {
    question: 'Dengarkan baik-baik contoh bunyi bacaan berikit ini!<br><br> Hukum bacaan yang tepat pada contoh bunyi bacaan di atas adalah ....',
    answers: {
      a: 'Mad Thabi’i',
      b: 'Mad Jaiz Munfasil',
      c: 'Mad Wajib Muttasil',
      d: 'Mad Layyin',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Perhatikan potongan ayat berikut ini! <span class="arab_tebal">الَّذِيْنَ هُمْ يُرَاۤءُوْنَۙ</span> Hukum bacaan yang terdapat pada ayat di atas adalah Mad Wajib Munfasil karena ....',
    answers: {
      a: '<span class="arab_tebal">( ا ) berharakat fathah bertemu ( ء )</span>',
      b: '<span class="arab_tebal">( يْ ) berharakat kasrah bertemu ( ء )</span>',
      c: '<span class="arab_tebal">( وْ ) berharakat damah bertemu ( ء )</span>',
      d: '<span class="arab_tebal">( وْ ) berharakat damah bertemu (  ُ )</span>',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Potongan ayat Al-Qur’an yang mengandung hukum bacaan Mad Thabi’i adalah ....',
    answers: {
      a: '<span class="arab_tebal">لَأُآعْبُدُ</span>',
      b: '<span class="arab_tebal">أَضَآ ءَتْ</span>',
      c: '<span class="arab_tebal">عَائِلً</span>',
      d: '<span class="arab_tebal">وَالتِّيْنِ</span>',
    },
    correctAnswer: 'c',
  },
  {
    question: 'Jika Alif<span class="arab_tebal">( ا )</span> tanpa harakat fathah bertemu huruf berharakat fathah maka hukum bacaannya adalah ....',
    answers: {
      a: 'Mad Thabi`i',
      b: 'Mad Wajib Munttasil',
      c: 'Mad Jaiz Munfasil',
      d: 'Mad Layyin',
    },
    correctAnswer: 'a',
  },
];
