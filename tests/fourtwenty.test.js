import Has420 from "../src/drmodules/fourtwenty";

test("Correctly identifies numbers containing 420", () => {
   expect(Has420(20420)).toBeTruthy();
   expect(Has420(42069)).toBeTruthy(); 
});

test("Correctly identifies non-420 numbers", () => {
    expect(Has420(3342)).toBeFalsy();
    expect(Has420(4269)).toBeFalsy();
});