function shortenNum(num) {
  const units = ["K", "M", "B", "T"];
  let output = num.toFixed(0);

  for (let i = 1; i <= units.length; i++) {
    const unitDigi = 10 ** (i * 3);

    const fixedDigi = (number) => {
      if (Math.round(number).toString().length % 3 === 2) return 1;
      if (Math.round(number).toString().length % 3 === 1) return 2;
      return 0;
    };

    if (num > unitDigi && num >= 10000)
      output = `${(num / unitDigi).toFixed(fixedDigi(num))}${units[i - 1]}`;
  }
  return output;
}

export default shortenNum;
