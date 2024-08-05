var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates, color, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
}
//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  const removechoc = [];
  for (let i = 0; i < number; i++) {
    removechoc.push(chocolates.shift());
  }
  return removechoc;
}
//Progression 3: Dispense z chocolates
function dispenseChocolates(chocolates, number) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  const dispense = [];
  for (let i = 0; i < number; i++) {
    const removed = chocolates.pop();
    dispense.push(removed);
  }
  return dispense;
}

//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates, number, color) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }

  const dispensedChocolates = [];
  let count = 0;

  for (let i = chocolates.length - 1; i >= 0 && count < number; i--) {
    if (chocolates[i] === color) {
      dispensedChocolates.push(chocolates[i]);
      count++;
    }
  }

  return dispensedChocolates;
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  const Count = [];
  const colors = [
    'green',
    'silver',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink',
  ];

  for (let i = 0; i < colors.length; i++) {
    let c = 0;
    for (let j = 0; j < chocolates.length; j++) {
      if (chocolates[j] === colors[i]) {
        c++;
      }
    }
    if (c > 0) {
      Count.push(c);
    }
  }

  return Count;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
  const chocolateCounts = {};
  for (let i = 0; i < chocolates.length; i++) {
    const chocolate = chocolates[i];
    chocolateCounts[chocolate] = (chocolateCounts[chocolate] || 0) + 1;
  }

  chocolates.sort((a, b) => {
    const countA = chocolateCounts[a];
    const countB = chocolateCounts[b];
    if (countA !== countB) {
      return countB - countA;
    }
    return a.localeCompare(b);
  });

  return chocolates;
}

//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates, number, color, finalColor) {
  if (chocolates.length === 0) {
    return [];
  }
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (color === finalColor) {
    return "Can't replace the same chocolates";
  }
  let count = 0;

  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] === color) {
      if (count < number) {
        chocolates[i] = finalColor;
        count++;
      } else {
        break;
      }
    }
  }

  return chocolates;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  if (color === finalColor) {
    return "Can't replace the same chocolates";
  }
  let count = 0;
  for (let i = 0; i <= chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
    if (chocolates[i] == finalColor) {
      count++;
    }
  }
  return [count, chocolates];
}

//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates, color) {
  let index = chocolates.indexOf(color);
  if (index !== -1) {
    chocolates.splice(index, 1);
  }
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(number) {
  let rainbowColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];
  let count = 0;
  for (let color of rainbowColors) {
    if (number.includes(color)) {
      count++;
    }
  }
  return count;
}
