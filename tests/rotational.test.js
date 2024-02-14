import RotationChecker from "../src/drmodules/rotational";
import AmbHelper from "../src/drmodules/ambigram";
import StrHelper from "../src/drmodules/strobogrammatic";
import PerHelper from "../src/drmodules/perfectprint";
const baseArr = [0,1,6,8,9];
const perfectArr = [0,6,8,9];

test("Correctly identifies Ambigrams", () => {
    expect(RotationChecker('0169',baseArr,AmbHelper)).toBeTruthy();
    expect(RotationChecker('9616',baseArr,AmbHelper)).toBeTruthy();
});

test("Correctly identifies Strobogram", () => {
    expect(RotationChecker('619',baseArr,StrHelper)).toBeTruthy();
    expect(RotationChecker('808',baseArr,StrHelper)).toBeTruthy();
});

test("Correctly identifies Perfect Print", () => {
    expect(RotationChecker('609',perfectArr,PerHelper)).toBeTruthy();
    expect(RotationChecker('888',perfectArr,PerHelper)).toBeTruthy();
});

test("Correctly identifies non-rotational numbers", () => {
    expect(RotationChecker('061894',baseArr,AmbHelper)).toBeFalsy();
    expect(RotationChecker('639',baseArr,StrHelper)).toBeFalsy();
    expect(RotationChecker('828',perfectArr,PerHelper)).toBeFalsy();
})
