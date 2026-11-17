//////// 1

function hasTwoCubeSums(n) {
	let counter = 0;
    let max = Math.cbrt(n);
    for (let i = 0; i < max; i++) {
        for (let j = i; j < max; j++) {
            if (i ** 3 + j ** 3 == n) {
                counter++;
            }
            if (counter >= 2) {
                return true;
            }
        }
    }
    return false;
}

//////2

function ipv4Parser(ip, mask){
    let parsedIP = ip.split(".").map(el => +el);
    let parsedMask = mask.split(".").map(el => +el);

    let network = [];
    let host = [];
    for (let i = 0; i < parsedIP.length; i++) {
        network[i] = parsedIP[i] & parsedMask[i];
        host[i] = parsedIP[i] - network[i];
    }
    return [network.join("."), host.join(".")];
}

//////3

function whatCentury(year) {
    let first = year.slice(0, 2);
    let last = year.slice(2, 4);

    if (last != "00") {
        first++;
    }

    let add = "th";
    if (first < 11 || first > 13) {
        switch (first % 10) {
            case 1: add = "st"; break;
            case 2: add = "nd"; break;
            case 3: add = "rd"; break;
            default: add = "th"; break;
        }
    }

    return first + add;
}

//console.log(whatCentury("2011"));

/////////4

function findMissing(list) {  
    let resi = 0;

    if (list[1] - list[0] != list[2] - list[1]) {
        resi = list[1] - list[0] > list[2] - list[1] ? 0 : 1;
    }
    else {
        let d = list[1] - list[0];
        for (let i = 3; i < list.length; i++) {
            if (list[i] - list[i - 1] != d) {
                resi = i - 1;
            }
        }
    }
    return list[resi] + (list[resi + 1] - list[resi]) / 2;
}

/////5

function primeFactors(n){
    let d = 2;
    let power = 0;
    let preResult = [];
    while (n % d === 0) {
        n /= d;
        power++;
    }
    if (power > 0) {
        preResult.push(power === 1 ? `(${d})` : `(${d}**${power})`);
    }
    d++;
    while (d * d < n) {
        power = 0;
        while (n % d === 0) {
            n /= d;
            power++;
        }
        if (power > 0) {
            preResult.push(power === 1 ? `(${d})` : `(${d}**${power})`);
        }
        d += 2;    
    }
    if (n != 1) {
        preResult.push(`(${n})`);
    }
    return preResult.join("");
}

/////////////6


function toWeirdCase(string){
    return string.split(" ").map(word => 
        [...word].map((ch, i) =>
            i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
        ).join("")
    ).join(" ");
}

//////7

function wave(str){
let res = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ')
            continue;

        res.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
    }

    return res;

}


///////////8


function expandedForm(num) {
let result = [];
    let counter = 0;
    while (num > 0) {
        if (num % 10 != 0) {
            result.push(`${num % 10}${'0'.repeat(counter)}`);
        }
        num = Math.floor(num / 10);
        counter++;
    }
    return result.reverse().join(" + ");

}


//////////// 9 


function solution(str)
{
   let flag = str.length % 2 == 0;
   let res = [];
   for (let i = 0; i < str.length - (flag ? 0 : 1); i += 2) {
        res.push(str[i] + str[i + 1]);
   }
   if (!flag) {
        res.push(str[str.length - 1] + "_");
   }
   return res;
}

////////// 10


function bingo(ticket, win)
{
let count = 0;
    ticket.map(el => {
        for (let i = 0; i < el[0].length; i++) {
            if (el[0].charCodeAt(i) === el[1]) {
                count++;
                break;
            }
        }
    })
    return count >= win ? "You won!" : "You lose!";
}

/////////// 11

function domainName(url)
{
  let reg = /(https?:\/\/)?(www\.)?/;
    return url.replace(reg, "").split(".")[0];
}

///////////// 12

function longest(arr, n)
{
 return arr.map((str, index) => ({ str, index })).sort((a, b) =>
      b.str.length - a.str.length || a.index - b.index)[n - 1].str;
}
///////////// 13

function hexStringToRGB(hexString) {
    return {
        r: parseInt(hexString.slice(1, 3), 16),
        g: parseInt(hexString.slice(3, 5), 16),
        b: parseInt(hexString.slice(5), 16),
    }
}

/////////////// 14


function isCircleSorted( arr ){
    let i = 0;
    for (; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            break;
        }
    }

    
    if (i < arr.length - 1) {
        i++;
        let size = i + arr.length - 1;
        for (; i < size; i++) {
            if (arr[(i + 1) % arr.length] < arr[i % arr.length]) {
                return false;
            }
        }
    }

    return true;
}

//////////// 16

Array.prototype.square = function() {
    return this.map(i => i ** 2);
}

Array.prototype.cube = function() {
    return this.map(i => i ** 3);
}

Array.prototype.average = function() {
    return this.sum() / this.length;
}

Array.prototype.sum = function() {
    let sum = 0;
    this.forEach(i => sum += i);
    return sum;
}

Array.prototype.even = function() {
    let res = []
    this.forEach(i => {
        if (i % 2 === 0)
            res.push(i);
    });
    return res;
}

Array.prototype.odd = function() {
    let res = []
    this.forEach(i => {
        if (i % 2 !== 0)
            res.push(i);
    });
    return res;
}
