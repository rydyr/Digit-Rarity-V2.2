import TrailingZeros from "../src/drmodules/trailingzeros";

test("Correctly identifies numbers with a trailing zero", () => {
    expect(TrailingZeros('420')).toBeTruthy();
    expect(TrailingZeros('21000')).toBeTruthy();
});

test("Correctly identifies numbers without a trailing zero", () => {
    expect(TrailingZeros('0123')).toBeFalsy();
    expect(TrailingZeros('22202')).toBeFalsy();
})