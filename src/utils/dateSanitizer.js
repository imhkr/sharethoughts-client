export const simplifyDate = (new_created_at) => {
  return new_created_at
    .toISOString()
    .split("-")
    .slice(0)
    .join("/")
    .split("T")[0];
};
