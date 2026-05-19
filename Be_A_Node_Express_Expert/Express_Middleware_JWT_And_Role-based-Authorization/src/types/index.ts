export const USER_ROLE = {
  admin: "admin",
  agent: "agent",
  user: "user",
} as const;

export type ROLES = typeof USER_ROLE[keyof typeof USER_ROLE];