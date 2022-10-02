import { test as testingTest } from "../index";

test("Testing test", () => {
  expect(testingTest("test")).toBe("Test test");
});
