/* Using this type of code for future projects possibly so why not save it I guess */

let email = "valderramameagan0710@gmail.com";

function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let firstLetter = email[0];
  let lastLetter = email[atIndex - 1];
  let domain = email.slice(atIndex);

  let maskedMiddle = "*".repeat(atIndex - 2);
  return firstLetter + maskedMiddle + lastLetter + domain;
}

console.log(maskEmail(email));
