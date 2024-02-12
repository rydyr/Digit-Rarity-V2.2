import AmbHelper from "../src/drmodules/ambigram";

test("positively identify ambigrammatic numbers", () => {
    expect(AmbHelper(1,6)).toBeTruthy();
    expect(AmbHelper(0,9)).toBeTruthy();
    expect(AmbHelper(8,0)).toBeTruthy();
});

test("positively identify non-ambigrammatic numbers", () => {
    expect(AmbHelper(3,4)).toBeFalsy();
    expect(AmbHelper(0,5)).toBeFalsy();
})