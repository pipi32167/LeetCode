/**
 * @param {string} s
 * @return {boolean}
 */
var isValidIPv4 = function (s) {

  if (s.length === 0 || s.length > 3) {
    return false
  }

  if (/\D/.test(s)) {
    return false
  }

  if (Number(s).toString() !== s) {
    return false
  }

  if (Number(s) > 255) {
    return false
  }

  return true
}

// console.log(isValidIPv4('0') === true);
// console.log(isValidIPv4('255') === true);
// console.log(isValidIPv4('12') === true);
// console.log(isValidIPv4('a') === false);
// console.log(isValidIPv4('1a') === false);
// console.log(isValidIPv4('1213') === false);
// console.log(isValidIPv4('1(') === false);

/**
 * @param {string} s
 * @return {boolean}
 */
var isValidIPv6 = function (s) {

  if (s.length === 0 || s.length > 4) {
    return false
  }

  if (/[^\da-fA-F]/.test(s)) {
    return false
  }

  if (isNaN('0x' + s)) {
    return false
  }

  return true
}

// console.log(isValidIPv6('0') === true);
// console.log(isValidIPv6('0000') === true);
// console.log(isValidIPv6('0FFF') === true);
// console.log(isValidIPv6('FFFF') === true);
// console.log(isValidIPv6('abcD') === true);
// console.log(isValidIPv6('10z') === false);
// console.log(isValidIPv6('') === false);
// console.log(isValidIPv6('12345') === false);
// console.log(isValidIPv6('01234') === false);

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  const parts = IP.split(/[\.:]/)
  if (parts.length !== 4 && parts.length !== 8) {
    return 'Neither'
  }
  const isValid = parts.length === 4 ? isValidIPv4 : isValidIPv6
  for (let i = 0; i < parts.length; i++) {
    // console.log(parts[i], isValid(parts[i]));
    if (!isValid(parts[i])) {
      return 'Neither'
    }
  }

  return parts.length === 4 ? 'IPv4' : 'IPv6'
};
console.log(validIPAddress('172.16.254.1') === 'IPv4');
console.log(validIPAddress('172.16.254.01') === 'Neither');
console.log(validIPAddress('172.16.254.1.1') === 'Neither');
console.log(validIPAddress('2001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:db8:85a3:0:0:8A2E:0370:7334') === 'IPv6');
console.log(validIPAddress('2001:0db8:85a3::8A2E:0370:7334') === 'Neither');
console.log(validIPAddress('02001:0db8:85a3:0000:0000:8a2e:0370:7334') === 'Neither');
console.log(validIPAddress(':0db8:85a3:0000:0000:8a2e:0370:7334') === 'Neither');
