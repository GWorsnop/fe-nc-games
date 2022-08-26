export function formatDate(date) {
  let dateString = new Date(date).toLocaleString();
  dateString = dateString.slice(0, -3);
  dateString = dateString.replace(",", "");

  return dateString;
}
