/**
 * 
 * Bu program, ekranda, input olarak verilen almanca saat ifadelerini, digital saat eslenigine ceviriyor.
 * Varsayilanlar
 * 1) Input alaninin ekranda olmasi lazim
 * 2) Islemi baslatmak icin buton
 * 3) Outpu alani olmasi lazim
 * 4) Validation kurallari tanimlanmis olmasi lazim
 * 
 * Programin isleyis asamalari
 * 
 * 1) Kullanici input alanina bir deger girer.
 * 2) Kullanici buttona basar
 * 3) Girilen deger javascript tarafindan JS SPACE alinir.
 * 3.1) Bu deger bir degiskene atanir 
 * 3.2) Bu deger VALIDATE edilir. 
 * 4) Girilen deger yorumlanir.
 * 4.1) "act uhr": Eger verilen input icinde nach, vor, halb, viertel gecmiyorsa, o zaman bu deger icin "uhr" i cikartirim kalan deger tam bir saate denk gelmeli.
 * 4.2) "halb zehn": "halb" geciyorsa, halbi cikar ve bunu 30 dakika olarak yorumlama, geri kalani sayiya cevir ve bir eksilt
 * 4.3) "viertel vor sieben": "vor" girilen deger icinde geciyorsa, bu deger ikiye "vor" üzerinden ikiye parcalanir ve u iki sayi ayri ayri degerlendirilir. Parcalanan degerin ilk bölümü dakika olarak degerlendirilir ve 60dak dan cikarilir. Ikinci kisim ise sayiya cevrilir ve 1 eksiltilir
 * 4.4) "viertel nach fünf": "nach" burada iki sayiyi birlesitiriyor. Solda kalan sayi ayniyle dakikayi olustururken sagdaki sayi ise ayniyle saati olusturur.
 * 4.5) "fünf vor halb sechs": ?
 * 5) Sonuc bulunur ve outpu alanina yazdirilir
 *
 * 
 * Lösungsansatz Mustafa:
 * Su kelimeler varsa:   "nach", "vor", "viertel", "halb", "uhr" ve sayilar
 * 
 * Lösungansatz Mehmet:
 * viertel von acht
 * halb zehn
 * acht uhr
 * 
 */

