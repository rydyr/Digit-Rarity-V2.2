const score = {
  //floor
  floor: {
    three: 1000,
    four: 10000,
    five: 100000,
    six: 1000000,
    seven: 10000000,
    eight: 100000000
  },
  //singles 
  palindrome: {
    general: 22200,
    three: 100,
    four: 100,
    five: 1000,
    six: 1000,
    seven: 10000,
    eight: 10000
  },
  ambigram: {
    general: 488250,
    three: 125,
    four: 625,
    five: 3125,
    six: 15625,
    seven: 78125,
    eight: 390625
  },
  ambigramstrobogrammatic: {
    general: 1550,
    three: 25,
    four: 25,
    five: 125,
    six: 125,
    seven: 625,
    eight: 625
  },
  ambigramstrobogrammaticperfectprint: {
    general: 504,
    three: 8,
    four: 16,
    five: 32,
    six: 64,
    seven: 128,
    eight: 256
  },
  prime: {
    general: 6516749,
    three: 168,
    four: 1229,
    five: 9592,
    six: 78498,
    seven: 664579,
    eight: 5762683
  },
  fourtwenty: {
    general: 653690,
    three: 1,
    four: 20,
    five: 300,
    six: 3999,
    seven: 49970,
    eight: 599400
  },
  sixtynine: {
    general: 7494729,
    three: 20,
    four: 299,
    five: 3970,
    six: 49401,
    seven: 590040,
    eight: 6850999
  },
  leadingzeros: {
    general: 11111100,
    three: 100,
    four: 1000,
    five: 10000,
    six: 100000,
    seven: 1000000,
    eight: 10000000
  },
  trailingzeros: {
    general: 11111100,
    three: 100,
    four: 1000,
    five: 10000,
    six: 100000,
    seven: 1000000,
    eight: 10000000
  },
  sequentialAsc: {
    general: 33,
    three: 8,
    four: 7,
    five: 6,
    six: 5,
    seven: 4,
    eight: 3
  },
  sequentialDsc: {
    general: 33,
    three: 8,
    four: 7,
    five: 6,
    six: 5,
    seven: 4,
    eight: 3
  },
//doubles 
  palindromeambigram: {
    general: 1550,
    three: 25,
    four: 25,
    five: 125,
    six: 125,
    seven: 625,
    eight: 625
  },
  palindromeambigramstrobogrammatic: {
    general: 234,
    three: 9,
    four: 9,
    five: 27,
    six: 27,
    seven: 81,
    eight: 81
  },
  palindromeambigramstrobogrammaticperfectprint: {
    general: 56,
    three: 4,
    four: 4,
    five: 8,
    six: 8,
    seven: 16,
    eight: 16
  },
  palindromeprime: {
    general: 776,
    three: 15,
    four: 0,
    five: 93,
    six: 0,
    seven: 668,
    eight: 0
  },
  palindromefourtwenty: {
    general: 84,
    three: 0,
    four: 0,
    five: 2,
    six: 2,
    seven: 40,
    eight: 40
  },
  palindromesixtynine: {
    general: 1196,
    three: 2,
    four: 2,
    five: 38,
    six: 38,
    seven: 558,
    eight: 558
  },
  palindromeleadingzerostrailingzeros: {
    general: 2220,
    three: 10,
    four: 10,
    five: 100,
    six: 100,
    seven: 1000,
    eight: 1000
  },
  ambigramprime: {
    general: 30171,
    three: 19,
    four: 82,
    five: 327,
    six: 1308,
    seven: 5439,
    eight: 22996
  },
  ambigramsixtynine: {
    general: 121314,
    three: 10,
    four: 74,
    five: 485,
    six: 2976,
    seven: 17520,
    eight: 100249
  },
  ambigramleadingzeros: {
    general: 97650,
    three: 25,
    four: 125,
    five: 625,
    six: 3125,
    seven: 15625,
    eight: 78125
  },
  ambigramtrailingzeros: {
    general: 97650,
    three: 25,
    four: 125,
    five: 625,
    six: 3125,
    seven: 15625,
    eight: 78125
  },
  ambigramstrobogrammaticprime: {
    general: 69,
    three: 3,
    four: 0,
    five: 4,
    six: 8,
    seven: 23,
    eight: 31
  },
  ambigramstrobogrammaticsixtynine: {
    general: 262,
    three: 0,
    four: 6,
    five: 3,
    six: 34,
    seven: 30,
    eight: 189
  },
  ambigramstrobogrammaticleadingzerostrailingzeros: {
    general: 248,
    three: 3,
    four: 5,
    five: 15,
    six: 25,
    seven: 75,
    eight: 125
  },
  ambigramstrobogrammaticperfectprintprime: {
    general: 11,
    three: 0,
    four: 0,
    five: 0,
    six: 2,
    seven: 3,
    eight: 6
  },
  ambigramstrobogrammaticperfectprintsixtynine: {
    general: 149,
    three: 0,
    four: 5,
    five: 2,
    six: 23,
    seven: 16,
    eight: 103
  },
  ambigramstrobogrammaticperfectprintleadingzerostrailingzeros: {
    general: 126,
    three: 2,
    four: 4,
    five: 8,
    six: 16,
    seven: 32,
    eight: 64
  },
  primefourtwenty: {
    general: 31688,
    three: 0,
    four: 1,
    five: 21,
    six: 235,
    seven: 2674,
    eight: 28757
  },
  primesixtynine: {
    general: 528630,
    three: 4,
    four: 57,
    five: 523,
    six: 4996,
    seven: 48644,
    eight: 474406
  },
  primeleadingzeros: {
    general: 754091,
    three: 25,
    four: 168,
    five: 1229,
    six: 9592,
    seven: 78498,
    eight: 664579
  },
  fourtwentysixtynine: {
    general: 21136,
    three: 0,
    four: 0,
    five: 2,
    six: 60,
    seven: 1197,
    eight: 19877
  },
  fourtwentyleadingzeros: {
    general: 54290,
    three: 0,
    four: 1,
    five: 20,
    six: 300,
    seven: 3999,
    eight: 49970
  },
  fourtwentytrailingzeros: {
    general: 165080,
    three: 1,
    four: 11,
    five: 120,
    six: 1299,
    seven: 13979,
    eight: 149670
  },
  sixtynineleadingzeros: {
    general: 643731,
    three: 1,
    four: 20,
    five: 299,
    six: 3970,
    seven: 49401,
    eight: 590040
  },
  sixtyninetrailingzeros: {
    general: 643731,
    three: 1,
    four: 20,
    five: 299,
    six: 3970,
    seven: 49401,
    eight: 590040
  },
  leadingzerossequentialAsc: {
    general: 6,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1
  },
  trailingzerossequentialDsc: {
    general: 6,
    three: 1,
    four: 1,
    five: 1,
    six: 1,
    seven: 1,
    eight: 1
  },
  //triples
  palindromeambigramprime: {
    general: 55,
    three: 4,
    four: 0,
    five: 8,
    six: 0,
    seven: 43,
    eight: 0
  },
  palindromeambigramsixtynine: {
    general: 296,
    three: 2,
    four: 2,
    five: 18,
    six: 18,
    seven: 128,
    eight: 128
  },
  palindromeambigramleadingzerostrailingzeros: {
    general: 360,
    three: 5,
    four: 5,
    five: 25,
    six: 25,
    seven: 125,
    eight: 125
  },
  palindromeambigramstrobogrammaticprime: {
    general: 7,
    three: 2,
    four: 0,
    five: 1,
    six: 0,
    seven: 4,
    eight: 0
  },
  palindromeambigramstrobogrammaticleadingzerostrailingzeros: {
    general: 78,
    three: 3,
    four: 3,
    five: 9,
    six: 9,
    seven: 27,
    eight: 27
  },
  palindromeambigramstrobogrammaticperfectprintleadingzerostrailingzeros: {
    general: 50,
    three: 3,
    four: 3,
    five: 7,
    six: 7,
    seven: 15,
    eight: 15
  },
  palindromeprimefourtwenty: {
    general: 1,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 1,
    eight: 0
  },
  palindromeprimesixtynine: {
    general: 48,
    three: 0,
    four: 0,
    five: 4,
    six: 0,
    seven: 44,
    eight: 0
  },
  palindromefourtwentyleadingzerostrailingzeros: {
    general: 26,
    three: 0,
    four: 0,
    five: 1,
    six: 1,
    seven: 12,
    eight: 12
  },
palindromesixtynineleadingzerostrailingzeros: {
    general: 80,
    three: 0,
    four: 0,
    five: 2,
    six: 2,
    seven: 38,
    eight: 38
  },
  ambigramprimesixtynine: {
    general: 8744,
    three: 1,
    four: 13,
    five: 66,
    six: 311,
    seven: 1460,
    eight: 6893
  },
  ambigramprimeleadingzeros: {
    general: 7179,
    three: 4,
    four: 19,
    five: 82,
    six: 327,
    seven: 1308,
    eight: 5439
  },
  ambigramsixtynineleadingzeros: {
    general: 21066,
    three: 1,
    four: 10,
    five: 74,
    six: 485,
    seven: 2976,
    eight: 17520
  },
  ambigramsixtyninetrailingzeros: {
    general: 21066,
    three: 1,
    four: 10,
    five: 74,
    six: 485,
    seven: 2976,
    eight: 17520
  },
  ambigramleadingzerostrailingzeros: {
    general: 19530,
    three: 5,
    four: 25,
    five: 125,
    six: 625,
    seven: 3125,
    eight: 15625
  },
  ambigramstrobogrammaticprimesixtynine: {
    general: 21,
    three: 0,
    four: 0,
    five: 0,
    six: 4,
    seven: 1,
    eight: 16
  },
  ambigramstrobogrammaticsixtynineleadingzerostrailingzeros: {
    general: 44,
    three: 0,
    four: 1,
    five: 0,
    six: 6,
    seven: 3,
    eight: 34
  },
  ambigramstrobogrammaticperfectprintprimesixtynine: {
    general: 4,
    three: 0,
    four: 0,
    five: 0,
    six: 1,
    seven: 0,
    eight: 3
  },
  ambigramstrobogrammaticperfectprintsixtynineleadingzerostrailingzeros: {
    general: 31,
    three: 0,
    four: 1,
    five: 0,
    six: 5,
    seven: 2,
    eight: 23
  },
  primefourtwentysixtynine: {
    general: 1324,
    three: 0,
    four: 0,
    five: 0,
    six: 9,
    seven: 91,
    eight: 1224
  },
  primefourtwentyleadingzeros: {
    general: 2931,
    three: 0,
    four: 0,
    five: 1,
    six: 21,
    seven: 235,
    eight: 2674
  },
  primesixtynineleadingzeros: {
    general: 54224,
    three: 0,
    four: 4,
    five: 57,
    six: 523,
    seven: 4996,
    eight: 48644
  },
  fourtwentysixtynineleadingzeros: {
    general: 1259,
    three: 0,
    four: 0,
    five: 0,
    six: 2,
    seven: 60,
    eight: 1197
  },
  fourtwentysixtyninetrailingzeros: {
    general: 5547,
    three: 0,
    four: 0,
    five: 1,
    six: 22,
    seven: 359,
    eight: 5165
  },
  fourtwentyleadingzerostrailingzeros: {
    general: 15410,
    three: 0,
    four: 1,
    five: 11,
    six: 120,
    seven: 1299,
    eight: 13979
  },
  sixtynineleadingzerostrailingzeros: {
    general: 53691,
    three: 0,
    four: 1,
    five: 20,
    six: 299,
    seven: 3970,
    eight: 49401
  },
  //quads
  palindromeambigramprimesixtynine: {
    general: 9,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 9,
    eight: 0
  },
  palindromeambigramsixtynineleadingzerotrailingzero: {
    general: 40,
    three: 0,
    four: 0,
    five: 2,
    six: 2,
    seven: 18,
    eight: 18
  },
  ambigramprimesixtynineleadingzeros: {
    general: 1851,
    three: 0,
    four: 1,
    five: 13,
    six: 66,
    seven: 311,
    eight: 1460
  },
  ambigramsixtynineleadingzerostrailingzeros: {
    general: 3546,
    three: 0,
    four: 1,
    five: 10,
    six: 74,
    seven: 485,
    eight: 2976
  },
  primefourtwentysixtynineleadingzeros: {
    general: 100,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 9,
    eight: 91
  }
}

export default score;