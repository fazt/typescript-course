
// Enum
// gives more friendly Names to numeric Values
enum Color {
  Red,
  Green,
  Blue,
}
var c: Color = Color.Red; //0

// enums work by naming numeric values
enum Role {
  Employee,
  Manager,
  Admin,
}
var role: Role = Role.Employee; // 0

// by default is 0, but you can tweak either the start
// and also you can set individual values
enum UserPermissions {
  Root = 4,
  Invited,
}
console.log(UserPermissions.Root);
console.log(UserPermissions[5]);
// var fazt = Permissions.Root; // 4
// var jesus = Permissions[5]; // Invited

// You can use strings as well
// Enums
enum Keys {
  Up = "Top",
  Down = "Bottom",
  Left = "To the Left",
  Right = "To the Right",
}

console.log(Keys)
console.log(Keys.Down)