import { division } from "../script.js";

test("division simple", () => {
  expect(division(4, 2)).toBe(2);
  expect(division(4, 0)).toBe(null);
});
