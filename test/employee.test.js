const Employee = require("../assets/Employee");

test("Access instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Willie";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Access set id via constructor argument", () => {
  const testValue = 1;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Access set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Access get name via getName()", () => {
  const testValue = "Willie";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Access id via getId()", () => {
  const testValue = 2;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Access get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});