export const randomChar = () => {
  const chars = "ASDFGHJKLQWERTY";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};
