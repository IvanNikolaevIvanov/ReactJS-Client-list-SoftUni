export const formatDate = (isoDate) => {
  const options = { year: "numeric", month: "long", dat: "numeric" };
  return new Date(isoDate).toLocaleDateString(undefined, options);
};
