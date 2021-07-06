const Manager = require("../assets/Manager");
// const Employee = require("../lib/Employee");

test("Access set office number via constructor argument", () => {
  const testValue = 1000;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() returns \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Access get office number via getOffice()", () => {
  const testValue = 1000;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});