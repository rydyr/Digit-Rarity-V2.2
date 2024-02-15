import React from "react";

function Documentation() {
    return(
        <div className="doc-body">
            <h1>Digit Rarity</h1>
            <p>Making number comparisions quick and easy</p>
            <p>Enter a number between 3 and 8 digits length and click "Prove Your Rarity"</p>
            <img src="../public/images/drex1.jpg" alt="image1" />
            <p>Based on the result of your search you will see a series of accordian bars</p>
            <img src="../public/images/drex2.jpg" alt="image2" />
            <h3>Score</h3>
            <p>The first thing you'll notice is a rarity score</p>
            <img src="../public/images/drex3.jpg" alt="image3" />
            <p>This first score is based on type and length. Rarity scores represent relative frequency where a score of 0 is least rare and 8 is most rare.</p>
            <p>The following population is the total population for the specific type combination across all lengths.</p>
            <img src="../public/images/drex4.jpg" alt="image4" />
            <p>Total population for all digits is determined as follows:</p>
            <ol start="3">
                <li>000-999 = 1,000</li>
                <li>0000-9999 = 10,000</li>
                <li>00000-99999 = 100,000</li>
                <li>000000-999999 = 1,000,000</li>
                <li>0000000-9999999 = 10,000,000</li>
                <li>00000000-99999999 = 100,000,000</li>
                <p>Total = 111,111,000</p>
            </ol>
            <p>Type Score is the rarity score for the specific type combination across all lengths</p>
            <img src="../public/images/drex5.jpg" alt="image5" />
            <p>There are currently 11 types that Digit Rarity identifies. We'll cover those more below</p>
            <img src="../public/images/drex6.jpg" alt="image6" />
            <h3>Length</h3>
            <p>This shows the length and length population</p>
            <img src="../public/images/drex7" alt="image7" />
            <h3>Types</h3>
            <p>Each type bar provides more information about each type including population by length, total population, and a description of the type.</p>
            <p>Types (so far):</p>
            <ol>
                <li>Palindrome</li>
                <li>Ambigram</li>
                <li>Strobogrammatic</li>
                <li>Perfect Print</li>
                <li>Prime</li>
                <li>69</li>
                <li>420</li>
                <li>Leading Zeros</li>
                <li>Trailing Zeros</li>
                <li>Ascending Sequential</li>
                <li>Descending Sequential</li>
            </ol>

            <p>Types 1-5 follow the identification standards of the OEIS (Online Encyclopedia of Integer Sequences) with one exception:</p>
            <p>Our use case allows for leading zeros. The instances were identified and populations adjusted accordingly</p>
        </div>
    )
}

export default Documentation;