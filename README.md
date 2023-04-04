<h1>PENJELASAN PROGRAM</h1>

<h2>Soal 1</h2>
<p>Fungsi rand menerima dua parameter yaitu min dan max dengan nilai default null.<br>
Jika kedua parameter memiliki nilai null, maka fungsi langsung mengembalikan nilai 0.<br>
Jika parameter max memiliki nilai null, maka nilai min akan dijadikan sebagai max, dan min akan dijadikan sebagai 0.<br>
Fungsi kemudian akan mengembalikan sebuah nilai integer acak yang berada di antara min dan max menggunakan fungsi Math.random() dan dibulatkan ke bawah menggunakan Math.floor().<br> Perlu ditambahkan 1 pada perhitungan angka acak yang dihasilkan agar nilai maksimum juga tercakup dalam range.</p>

<h2>Soal 2</h2>
<p>Fungsi choose Decimals menerima dua parameter yaitu n dan d yang harus berupa angka.<br>
Jika salah satu parameter bukan angka, maka fungsi akan mengembalikan string error.<br>
Pertama-tama, nilai n akan diubah menjadi string menggunakan metode .toString() untuk memudahkan manipulasi.<br>
Selanjutnya, fungsi akan mencari posisi titik desimal pada string menggunakan metode .indexOf().<br>
Jika tidak ditemukan titik desimal, maka fungsi akan mengembalikan string dengan menambahkan titik desimal dan d angka nol pada bagian belakang.<br>
Jika ditemukan titik desimal, maka fungsi akan memisahkan bagian integer dan desimal menggunakan metode .substring().<br>
Jika panjang desimal kurang dari d, maka fungsi akan menambahkan angka nol pada bagian belakang sehingga jumlah digit desimal sesuai dengan d.<br>
Terakhir, fungsi akan menggabungkan bagian integer dan desimal kembali menggunakan string interpolation dan mengembalikan nilai tersebut.</p>

<h2>Soal 3</h2>
<p>Fungsi isItNumeric menerima satu parameter yaitu input.<br>
Jika input adalah sebuah angka (tipe data number), maka fungsi akan langsung mengembalikan nilai true.<br>
Jika input adalah sebuah string dan tidak kosong, maka fungsi akan menggunakan metode isNaN untuk mengecek apakah string tersebut dapat dikonversi menjadi sebuah angka.<br> Jika tidak dapat dikonversi, maka fungsi akan mengembalikan nilai false, sedangkan jika dapat dikonversi maka fungsi akan mengembalikan nilai true.<br>
Jika input bukan angka maupun string yang tidak kosong, maka fungsi akan mengembalikan nilai false.</p>

<h2>Soal 4</h2>
<p>Fungsi roundUpToFive menerima satu parameter yaitu number.<br>
Fungsi ini membagi number dengan 5 dan kemudian membulatkannya ke atas ke kelipatan 1 dengan metode Math.ceil.<br> Setelah itu, hasilnya dikali dengan 5 untuk mendapatkan nilai yang merupakan kelipatan 5 terdekat dari number.<br>
Hasil akhir dari fungsi ini adalah nilai kelipatan 5 terdekat dari number.</p>
