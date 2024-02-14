import IsPrime from "../src/drmodules/prime";

test("Correctly identifies Prime numbers", () => {
    expect(IsPrime(17)).toBeTruthy();
    expect(IsPrime(103)).toBeTruthy();
});

test("Correctly identifies non-Prime numbers", () => {
    expect(IsPrime(22)).toBeFalsy();
    expect(IsPrime(333)).toBeFalsy();
})