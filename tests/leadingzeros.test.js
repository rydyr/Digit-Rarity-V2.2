import LeadingZeros from "../src/drmodules/leadingzeros";

test("Correctly identifies numbers with leading zeros", () => {
    expect(LeadingZeros('0321')).toBeTruthy();
    expect(LeadingZeros('007')).toBeTruthy();
});

test("Correctly identifies numbers without leading zeros", () => {
    expect(LeadingZeros('2210')).toBeFalsy();
    expect(LeadingZeros('222')).toBeFalsy();
})