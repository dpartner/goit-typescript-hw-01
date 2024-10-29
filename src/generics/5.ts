export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDesc = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: RoleDesc = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
