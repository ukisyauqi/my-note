/* -------------- AKSES member array -------------- */
a = [5, 6, 7, 8, 9]
b = a[a.length - 1]  // a[-1] gak bisa,  out: 9
b = a.slice(2, 4)    // a[2:4] gak bisa, out: [7,8]    


/* -------------- ADD & REMOVE array element  -------------- */
a = [1]           // a =   [1]
a.push(5, 6)      // a =   [1,5,6]    masuk kanan
a.pop()           // a =   [1,5]      hapus kanan
a.shift()         // a =     [5]      hapus kiri    (kalo 1 member gak bisa shift)
a.unshift(0, 1)   // a = [0,1,5]      masuk kiri
a.splice(2,1)     // a = [0,5]        di index = 2, hapus sebanyak 1
delete a[1]       // a = [0, <1 empty item>]

// gabung array
a = [1, 2, 3] ; b = [4, 5, 6] ; c = 1
d = a.concat(b, c)   // ...a + ...b + ...c = [1,2,3,4,5,6,1]
d = [...a, ...b, c]

// splice
a = [0, 1, 9, 3]
a.splice(2, 1, 8, 9)       // [0,1,8,9,3] di index 2, hapus 1 , masuk 8,9
a.splice(2, 0, [1, 2, 3])  // a = [ 0, 1, [ 1, 2, 3 ], 8, 9, 3 ]


/* -------------- Array -> String -> Number -> String -> Array  -------------- */
a = [1, 2, "3", "4"]
a = a.join("")   // Array  -> String   a = "1234"             
a = parseInt(a)  // String -> Number   a = 1234              
a = a.toString() // Number -> String   a = "1234"           
a = a.split("")  // String -> Array    a = ['1','2','3','4'] 
// merubah 1234 jadi [1,2,3,4]
a = 1234; a = a.toString().split("").map((n) => parseInt(n)); //[1,2,3,4]; 


/* -------------- MODIFIKASI element Array -------------- */
a = ["1", "4", 3, 2]
b = a.reverse()        //[ 2 , 3 ,'4','1']
b = a.copyWithin(2, 0) //['1',2,'1',2] copy di 0, paste di 2 (replace)


/* -------------- SORTING -------------- */
b = a.sort((n, m) => n - m) // naik  [1,2,3,4]
b = a.sort((n, m) => m - n) // turun [4,3,2,1]


/* -------------- SEARCH member -------------- */
Array.prototype.indexOfAll = function (val) {return this.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);};
Array.prototype.count = function (val) { let c = 0, i, len = this.length; for (i = 0; i < len; ++i) { if (this[i] == val) c++; } return c; }; 
a = ["6", "5", "4", "4"]
b = a.includes("6")        //true   ada 6? 2nd par is start
b = a.indexOf("4")         //2      dimana 4? (first match), if not => -1, 2nd par is start 
b = a.indexOfAll("4")      //[2,3]  dimana aja 4? (all index)
b = a.count("4")           //2      ada berapa "4"?


/* -------------- MENERAPKAN FUNGSI untuk setiap anggota array -------------- */
a = [2, 3, 4, 5]
b = a.map((n) => n ** 2) //[4,9,16,25]


/* -------------- Kyk MAP tapi bawa total, TOTAL = RETURN DI LOOP SEBELUMNYA -------------- */
a = [1, 2, 3]
b = a.reduce((total, num) => total + num, 0); //6; sum(a); #2 parameter is init


/* -------------- Kyk MAP juga tapi ngecheck apakah sesuai -------------- */
a = [2, 3, 6, 7]
b = a.some((n) => n > 3)      //true   beberapa n > 3 ?
b = a.every((n) => n > 3)     //false  semua n > 3 ?
b = a.find((n) => n > 3)      //6      cari n > 3 
b = a.filter((n) => n > 3)    //[6,7]  cari semua n > 3
b = a.findIndex((n) => n > 3) //2      index n > 3


/* -------------- Object <=> String ------------ */
obj = {nama: "uki"}
str = JSON.stringify(obj)     //out: "{nama: "uki"}"
newObj = JSON.parse(str)      //newObj = {nama: "uki"}


/* -------------- Format Bilangan -------------- */
//all to dec
hex = "FF"  ; dec = parseInt(hex,16) // hex -> dec    out: 255
oct = "66"  ; dec = parseInt(oct,8)  // oct -> dec    out: 54 
bin = "110" ; dec = parseInt(bin,2)  // bin -> dec    out: 6

//dec to all
dec = 254
hex = dec.toString(16) //"fe"
oct = dec.toString(8)  //"376"
bin = dec.toString(2)  //"11111111"


/* -------------- Usefull Function -------------- */

//REMOVE the same number, return number that included in arr
function removeTheSameItemOfArray(arr) {
  return Array.from(new Set(arr));
}

//calculate factorial of num
function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

//is prime? true or false
function isPrime(num) {
  if (num !== 2 && num % 2 === 0) {
    return false;
  }
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//prime between lowerNum and higherNum (lower and higher number included)
function primeBetween(lowNum, hiNum) {
  if (lowNum % 2 === 0) {
    lowNum++;
  }
  if (hiNum % 2 === 0) {
    hiNum--;
  }
  let res = [], flag, i, j;
  for (i = lowNum; i <= hiNum; i += 2) {
    flag = 0;
    for (j = 3; j < i; j += 2) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      res.push(i);
    }
  }
  return res;
}

//logarithm with specific base
const logBase = (n, base) => Math.log(n) / Math.log(base);

//bilangan prima
var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89];

//function to convert base of number
function convertBase(inputNum, baseOfInputNum, baseOfOutput) {
  return parseInt(inputNum, baseOfInputNum).toString(baseOfOutput);
}

//FPB KPK
const gcd = (a, b) => a ? gcd(b % a, a) : b;
const lcm = (a, b) => a * b / gcd(a, b);

// Baca JSON file
// readTextFile('./data.json', text => console.log(JSON.parse(text)))
function readTextFile(filePath, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", filePath, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}




