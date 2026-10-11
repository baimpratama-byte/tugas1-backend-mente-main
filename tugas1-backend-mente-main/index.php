<?php
function hitungGrade($nilai) {
    if ($nilai >= 85) {
        return "A";
    } elseif ($nilai >= 75) {
        return "B";
    } elseif ($nilai >= 65) {
        return "C";
    } elseif ($nilai >= 50) {
        return "D";
    } else {
        return "E";
    }
}

$daftarMahasiswa = [
    ["nama" => "Budi Santoso", "nilai" => 88],
    ["nama" => "Siti Aminah",  "nilai" => 77],
    ["nama" => "Rizky Pratama", "nilai" => 64],
    ["nama" => "Dewi Lestari", "nilai" => 92],
    ["nama" => "Ahmad Fauzi",  "nilai" => 45]
];


echo "========================================<br>";
echo "       DAFTAR GRADE MAHASISWA           <br>";
echo "========================================<br><br>";

foreach ($daftarMahasiswa as $mahasiswa) {
    $nama  = $mahasiswa["nama"];
    $nilai = $mahasiswa["nilai"];
    $grade = hitungGrade($nilai);

    echo "Nama  : " . $nama . "<br>";
    echo "Nilai : " . $nilai . "<br>";
    echo "Grade : " . $grade . "<br>";
    echo "----------------------------------------<br>";
}
?>