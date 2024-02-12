import Palindrome from "../src/drmodules/palindrome";

test("It correctly identifies palindrome numbers", () => {
    expect(Palindrome(131)).toBeTruthy();
    expect(Palindrome(55055)).toBeTruthy();
});

test("It correctly identifies non-palindrome numbers", () => {
    expect(Palindrome(113)).toBeFalsy();
    expect(Palindrome(550555)).toBeFalsy();
})
