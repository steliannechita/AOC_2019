// const arr = [112233,123444,111122,166999];
const arr =[]
for (let i = 147981; i <= 691423; i++) {
  arr.push(i);
}

const hasDoubles = arr.filter(num => {
  let regex = new RegExp(/([0-9])\1/);
  return regex.test(num);
  // return  (num+'').split('').length !== new Set((num+'').split('')).size
});

const HasIncreasingDigits = hasDoubles.filter(x => {
  const digits = x + "";
  return (
    digits ===
    digits
      .split("")
      .sort((a, b) => a - b)
      .join("")
  );
});

// const Part2 = HasIncreasingDigits.filter((num) => {
//   let regex = new RegExp(/([0-9])\1\1/g);
//   let regex1 = new RegExp(/([0-9])\1/g);
//     if ((num+'').match(regex) && (num+'').match(regex1)) {
//        if ((num+'').match(regex).length === (num+'').match(regex1).length){ return false}else{return true}
//     }else {return true}
        

  //   const digits = (num + "").split("");
  //   for (let i = 0; i < digits.length - 3; i++) {
  //     if (digits[i] == digits[i + 1] && digits[i + 1] == digits[i + 2]
  //         && digits[i+2]!==digits[i+3])
  //       return false;
  //   }
  //   return true;
// });
console.log(HasIncreasingDigits);
