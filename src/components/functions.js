function shortenNum(num, digit = 0) {
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
      output = `${Number((num / unitDigi).toFixed(fixedDigi(num) + digit))}${
        units[i - 1]
      }`;
  }
  return output;
}

export default shortenNum;
