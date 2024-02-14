import PerHelper from "../src/drmodules/perfectprint";

test("Correctly identifies perfect print numbers", () => {
    expect(PerHelper(6,9)).toBeTruthy();
    expect(PerHelper(8,8)).toBeTruthy();
});

test("Correctly identifies non-perfect print numbers", () => {
    expect(PerHelper(1,9)).toBeFalsy();
    expect(PerHelper(8,9)).toBeFalsy();
})