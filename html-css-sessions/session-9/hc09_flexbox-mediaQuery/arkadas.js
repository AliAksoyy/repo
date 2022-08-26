let isimler = "";
while (true) {
  let menu = prompt(
    "1 - Ogretmen menu\n2 - Ogrenci menu\n 0 - Exit\n(ogrenci menude notların gorünebilmesi icin ogretmen menuden notların girilmesi gerekir...)"
  );

  if (menu == 0) {
    break;
  } else if (menu == 1) {
    let sayac = +prompt("kac adet ogrenci verisi gireceksiniz : ");
    let isim = "";
    for (let i = 1; i <= sayac; i++) {
      isim = prompt(`${i}. ogrenci ismini giriniz : `);
      if (i == 1) {
        isimler = isim + " = ";
      } else {
        isimler += "     " + isim + " = ";
      }
      let sayac2 = +prompt(`${isim} icin kac adet not gireceksiniz : `);
      let not = 0;
      let ort = 0;
      let etki = 0;
      for (let j = 1; j <= sayac2; j++) {
        not = +prompt(`${j}. notu giriniz : `);
        etki = +prompt(`bu not yuzde kac etkili(0-100 arası rakam yazınız) : `);
        ort += (not * etki) / 100;
      }
      isimler += ort;
      console.log("ogrenci isimleri ve notlari basariyla eklendi...");
    }
    // console.log(isimler);
  }
  if (menu == 2) {
    let name = prompt("Lutfen aradıgınız ismi giriniz : ");
    let index = isimler.search(name);
    if (index != -1) {
      console.log(isimler.slice(index, index + 6 + name.length));
    } else {
      console.log("kayit bulunamadi....");
    }
  }
}

// ***
let isimler = "";
function notVer() {
  let sayacIsim = Number(prompt("Kaç öğrenci verisi gireceksiniz : "));
  for (let i = 1; i <= sayacIsim; i++) {
    let sayacNot = Number(
      prompt(`${i}. öğrenci kaç adet adet not gireceksiniz`)
    );
    let isim = prompt("öğrenci ismini giriniz : ");
    let toplam = 0;
    let ort = 0;
    for (let i = 1; i <= sayacNot; i++) {
      let not = Number(prompt(`${isim} için ${i}. notunu giriniz :`));
      toplam += not;
    }
    ort = toplam / sayacNot;
    isimler += isim + " = " + ort + "     ";
  }
  console.log(isimler);
}
function notSorgula(isim, isimler) {
  if (isimler.search(isim) != -1) {
    console.log(
      isimler.slice(
        isimler.search(isim),
        isimler.search(isim) + isim.length + 6
      )
    );
  } else {
    console.log("Yanlış isim girildi...");
  }
}
while (true) {
  let menü = prompt("1 - öğretmen menü\n2 - öğrenci menü\n 0 - exit");
  if (menü == "1") {
    notVer();
  } else if (menü == "2") {
    let isim = prompt("Lütfen isminizi giriniz : ");
    notSorgula(isim, isimler);
  } else if (menü == "0") {
    break;
  }
}

// *************
/ İF DÖNGÜSÜ
console.log("İF DÖNGÜSÜ");
if ("koşul") {
    // console.log("code body");
}
// console.log("Sisteme kayıtlı şifrenizle giriş yapınız.");
// let kayitliSifre = "erhan", şifre = prompt("Kayıtlı sifrenizi giriniz: ").toLowerCase();
// if (kayitliSifre === şifre) {
//     console.log("Girdiğiniz şifre kabul edildi");
// } else {
//     console.log("Girdiğiniz şifre yanlış.Lütfen tekrar gi");
// }
console.log("------------------------------------");
// FOR DÖNGÜSÜ
console.log("FOR DÖNGÜSÜ")
// for (initializer(BAŞLATAN); condition(KOŞUL); iterator(YENİLEYİCİ)) {
//     // for loop body
// }
// console.log("Örnek = 1-10 a kadar sayıları yazdırınız.");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
console.log("-------------------------------------------");
console.log("isNaN");
// isNaN dan bahsedelim
// let letter;
// letter = isNaN(prompt("Giriş yapınız: "));
// console.log(letter);
// Number type olacak olanlar için false değerini verir olmöayacaklar içinse true verir.
//  console.log(Number("a"));
console.log("------------------------------------------------");
console.log("Soru-1 Bir metin yazınız. Metin karaktelerinin string ise display yapınız eğer string değilse döngüden çıkınız.");
// let karakterUzunluğu, metin;
// metin = prompt("Aklınıza ilk geleni yazınız.");
// console.log(metin);
// karakterUzunluğu = metin.length;
// for (let i = 0; i < karakterUzunluğu; i++) {
//     let karakter = metin[i];
//     console.log(`${metin[i]} indekslenen karakter.`);
//     if (isNaN(karakter)) {
//         console.log(`${metin[i]} bu karakter string bir değerdir.`);
//     } else if (karakter === " ") {
//         console.log(`${metin[i]} bu karakter string bir değerdir.`);
//     } else {
//         console.log(`${metin[i]} bu karakter number bir değerdir.`);
//         break;
//     }
// }
console.log("---------------------------------------");
// WHİLE DÖNGÜSÜ
console.log("WHİLE DÖNGÜSÜ")
// while ("koşul") {
//     //code body
// }
console.log("Soru-2 = Girilen sayıların ortalaması çift olana kadar sayı isteyen bir döngü yazınız. ");
// let sayi, total, counter, avg;
// total = 0;
// counter = 0;
// avg = 1;
// while (avg % 2 != 0) {
//     sayi = prompt("Bir sayı giriniz: ");
//     if (isNaN != false ) {
//         console.log(`Girilen sayı ${sayi} dır. Sayı kabul edildi.`);
//         counter += 1;
//         if (counter > 1){
//         total += Number(sayi);
//             avg = Math.round(total / counter);
//             console.log(avg);
//         }
//     } else {
//         console.log("Girilen değer kabul edilmedi.");
//     }
// }
// console.log(`Sayıların ortalaması ${avg} dir.`);
// let number, total = 0, counter = 0, avg;
//  while (avg % 2 != 0 , ) {
//     number = prompt("bir sayı giriniz: ");
//     if (isNaN(number) == false) {
//         console.log(`Girilen sayı ${number} dır. Kabul edildi.`)
//         total += Number(number);
//         counter += 1;
//         avg = Math.round(total / counter);
//         console.log("Girilen sayıların ortalaması : ",avg);
//     } else {
//         console.log("Girilen değer kabul edilmedi.")
//     }
// }
for (let x = 1; x <= 10; x++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} X ${i} = ${x * i}`);
        if (i === 10) {
            console.log("---------------------");
        }
    }
}
console.log("---------------------------------------------");
console.log("DO WHİLE DÖNGÜSÜ");
do {
    console.log("Code body");
} while (false);
console.log("Soru-3 = Kullanıcının ismini yazdıran kodu yazınız.");
console.log("------------------------------------------------");
console.log("SEARCH METODU");
console.log("string.search(searchValue)");
console.log(
`The search() method matches a string against a regular expressionn
The search() method returns the index (position) of the first match.
The search() method returns -1 if no match is found.
The search() method is case sensitive.`);
console.log("ÖRNEK");
let text = "Mr. Blue has a blue house";
let position = text.search("Blue");
console.log("-----------------------------------------");
console.log("SLİCE METODU");
console.log("string.slice(start, end)");
console.log("Slice Metodunun Özellikleri");
console.log(`
The slice() method extracts a part of a string.
The slice() method returns the extracted part in a new string.
The slice() method does not change the original string.
The start and end parameters specifies the part of the string to extract.
The first position is 0, the second is 1, ...
A negative number selects from the end of the string.`);
console.log("ÖRNEK");
let text1 = "Hello world!";
let result = text1.slice(0, 5);
console.log("--------------------------------------------------------");
console.log("Soru-1 = Çarpım toplosunu yazdırınız.");