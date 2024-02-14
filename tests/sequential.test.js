import Sequential from "../src/drmodules/sequential";

test("Correctly identifies ascending sequential sequences", () => {
    expect(Sequential('0123','asc')).toBeTruthy();
    expect(Sequential('789','asc')).toBeTruthy();
});

test("Correctly identifies descending sequential sequences", () => {
    expect(Sequential('9876','sub')).toBeTruthy();
    expect(Sequential('43210','sub')).toBeTruthy();
});

test("Correctly identifies no sequential sequences", () => {
    expect(Sequential('1264','asc')).toBeFalsy();
    expect(Sequential('65421','sub')).toBeFalsy();
})