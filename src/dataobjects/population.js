const population = {
  scorecard: {
    label: "Score",
    description: "The score card features (in order) Rarity Score by length and type, type population, Rarity Score by type, and type list."
  },
  Length: {
    label: "Length",
    description: "Digit Rarity analyzes numbers and provides population data for each type. Population displays count for current character length first and the total count for all lengths 3 - 8 characters after.",
    total: '111,111,000',
    three: '1,000 / 111,111,000',
    four: '10,000 / 111,111,000',
    five: '100,000 / 111,111,000',
    six: '1,000,000 / 111,111,000',
    seven: '10,000,000 / 111,111,000',
    eight: '100,000,000 / 111,111,000'
  },
  palindrome: {
    label: "Palindrome",
    description: "Reads the same forwards and backwards.",
    general: '22,200',
    three: '100 / 22,200',
    four: '100 / 22,200',
    five: '1,000 / 22,200',
    six: '1,000 / 22,200',
    seven: '10,000 / 22,200',
    eight: '10,000 / 22,200'
  },
  ambigram: {
    label: "Ambigram",
    description: "Can be rotated 180 degrees and remain readable, often resulting in a new number.",
    general: '488,250',
    three: '125 / 488,250',
    four: '625 / 488,250',
    five: '3,125 / 488,250',
    six: '15,625 / 488,250',
    seven: '78,125 / 488,250',
    eight: '390,625 / 488,250'
  },
  strobogrammatic: {
    label: "Strobogrammatic",
    description: "A subset of Ambigram. Can be rotated 180 degrees and remain the same number (sans-serif.)",
    general: '1,550',
    three: '25 / 1,550',
    four: '25 / 1,550',
    five: '125 / 1,550',
    six: '125 / 1,550',
    seven: '625 / 1,550',
    eight: '625 / 1,550'
  },
  perfectprint: {
    label: "Perfect Print",
    description: "A further refinement of Strobogrammatic. Can be rotated 180 degrees and remains perfectly the same regardless of serif.",
    general: '504',
    three: '8 / 504',
    four: '16 / 504',
    five: '32 / 504',
    six: '64 / 504',
    seven: '128 / 504',
    eight: '256 / 504'
  },
  fourtwenty: {
    label: "Four Twenty",
    description: "Contains the meme digits 420",
    general: '653,690',
    three: '1 / 653,690',
    four: '20 / 653,690',
    five: '300 / 653,690',
    six: '3,999 / 653,690',
    seven: '49,970 / 653,690',
    eight: '599,400 / 653,690'
  },
  sixtynine: {
    label: "Sixty Nine",
    description: "Contains the meme digits 69",
    general: '7,494,729',
    three: '20 / 7,494,729',
    four: '299 / 7,494,729',
    five: '3,970 / 7,494,729',
    six: '49,401 / 7,494,729',
    seven: '590,040 / 7,494,729',
    eight: '6,850,999 / 7,494,729'
  },
  prime: {
    label: "Prime",
    description: "A Prime number. Divisible by only 1 and itself.",
    general: '6,515,521',
    three: '168 / 6,515,521',
    four: '1,229 / 6,515,521',
    five: '9,592 / 6,515,521',
    six: '78,498 / 6,515,521',
    seven: '664,579 / 6,515,521',
    eight: '5,761,455 / 6,515,521'
  },
  sequentialAsc: {
    label: "Sequential Ascending", 
    description: "An ascending sequential order.",
    general: '33',
    three: '8',
    four: '7',
    five: '6',
    six: '5',
    seven: '4',
    eight: '3'
  },
  sequentialDsc: {
    label: "Sequential Descending",
    description: "A descending sequential order.",
    general: '33',
    three: '8',
    four: '7',
    five: '6',
    six: '5',
    seven: '4',
    eight: '3'
  },
  leadingzeros: {
    label: "Leading Zeros",
    description: "A number with leading zeros.",
    general: '12,345,660',
    three: '100',
    four: '1,000',
    five: '10,000',
    six: '100,000',
    seven: '1,000,000',
    eight: '10,000,000'
  },
  trailingzeros: {
    label: "Trailing Zeros",
    description: "A number with trailing zeros.",
    general: '12,345,660',
    three: '100',
    four: '1,000',
    five: '10,000',
    six: '100,000',
    seven: '1,000,000',
    eight: '10,000,000'
  }
}

export default population 









