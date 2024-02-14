import StrHelper from "../src/drmodules/strobogrammatic";

test("Correctly identifies Strobogrammatic numbers", () => {
    expect(StrHelper(1,1)).toBeTruthy();
    expect(StrHelper(6,9)).toBeTruthy();
});

test("Correctly identifies non-Strobogrammatic numbers", () => {
    expect(StrHelper(1,3)).toBeFalsy();
    expect(StrHelper(6,2)).toBeFalsy();
});

test("Correctly identifies Strobogrammatic numbers not-balanced", () => {
    expect(StrHelper(0,1)).toBeFalsy();
    expect(StrHelper(6,8)).toBeFalsy();
})