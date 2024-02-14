import Has69 from "../src/drmodules/sixtynine";

test("Correctly identifies numbers with 69 in it", () => {
    expect(Has69('069')).toBeTruthy();
    expect(Has69('416914')).toBeTruthy();
});

test("Correctly identifies numbers without 69 in it", () => {
    expect(Has69('609')).toBeFalsy();
    expect(Has69('0068')).toBeFalsy();
})