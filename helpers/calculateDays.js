const calculateDays = (date) => {
  var daysToWedding;
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const weddingDate = new Date(date);
  weddingDate.setHours(0, 0, 0, 0);

  daysToWedding = weddingDate.getTime() - currentDate.getTime();

  return parseInt(daysToWedding / (1000 * 60 * 60 * 24));
};

export default calculateDays;
