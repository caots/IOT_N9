const getDateTime = () => {
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const HH = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const MI =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const SS =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return `${YYYY}-${MM}-${DD} ${HH}:${MI}:${SS}`;
};
// Format: YYYY-MM-DD HH:MI:SS
module.exports = { getDateTime };
