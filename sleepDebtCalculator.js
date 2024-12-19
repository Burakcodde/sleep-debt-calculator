function getSleepHours(day) {
  if (day === "monday") {
    return 7;
  } else if (day === "tuesday") {
    return 6;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 7;
  } else if (day === "friday") {
    return 6;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  }
}

function getActualSleepHours() {
  return 48;
}

function getIdealSleepHours(idealHours) {
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log(`${actualSleepHours} Saat Uyudun. Bu Mükemmel Uyku!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`${actualSleepHours - idealSleepHours} Saat Fazla Uyudun!`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `${
        idealSleepHours - actualSleepHours
      } Saat Az Uyudun, Biraz Dinlenmelisin`
    );
  }
}

calculateSleepDebt();
