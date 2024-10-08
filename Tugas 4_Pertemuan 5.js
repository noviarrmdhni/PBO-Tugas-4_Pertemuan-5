class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar){
        this.nama = nama;
        this.jenis = jenis; 
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal(){
        return `Kapal ini bernama ${this.nama}, berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} penumpang, 
        memiliki dimensi ${this.panjang} x ${this.lebar} meter.`;
    }


    getStatus(){
        return this._status;
    }

    setStatustersedia(){
        this._status = 'Tersedia';
        return `${this.nama} ${this._status}`;
    }

    setStatusTidaktersedia(){
        this._status = 'Tidak Tersedia';
        return `${this.nama} ${this._status}` ;
    }
}

class TiketKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, hargaTiket){
        super(nama, jenis, kapasitas, panjang, lebar);
        this.hargaTiket = hargaTiket;
    }

    infoKapal(){ 
        return `Harga tiket kapal ${this.nama} adalah Rp${this.hargaTiket}.`;
    }
}

class TurunKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, waktuTurun){
        super(nama, jenis, kapasitas, panjang, lebar);
        this.waktuTurun = waktuTurun;
    }

    infoKapal(){ 
        return `Kapal ${this.nama} akan turun di dermaga Bakauheni pada pukul ${this.waktuTurun}.`;
    }
}

class KargoKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, beratKargo){
        super(nama, jenis, kapasitas, panjang, lebar);
        this.beratKargo = beratKargo;
    }

    infoKapal(){ 
        return `Kapal ${this.nama} mengangkut kargo seberat ${this.beratKargo} ton.`;
    }
}

class KeberangkatanKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, waktuBerangkat){
        super(nama, jenis, kapasitas, panjang, lebar);
        this.waktuBerangkat = waktuBerangkat;
    }
 
    infoKapal(){ 
        return `Kapal ${this.nama} akan berangkat dari pelabuhan Bakauheni pada pukul ${this.waktuBerangkat}.`;
    }
}

let kapalPenumpang = new Kapal("Hari Prayitno", "Ferry", 500, 200, 100);
console.log(kapalPenumpang.infoKapal());

let tiketKapal = new TiketKapal("Hari Prayitno", "Ferry", 500, 200, 100, 150000);
console.log(tiketKapal.infoKapal());

let turunKapal = new TurunKapal("Hari Prayitno", "Ferry", 500, 200, 100, "15:00");
console.log(turunKapal.infoKapal());

let kargoKapal = new KargoKapal("Sumber Rezeki", "Kargo", 300, 150, 50, 200);
console.log(kargoKapal.infoKapal());

let keberangkatanKapal = new KeberangkatanKapal("Sumber Rezeki", "Kargo", 300, 150, 50, "10:00");
console.log(keberangkatanKapal.infoKapal());


document.getElementById("object").innerHTML = kapalPenumpang.infoKapal();
document.getElementById("object").innerHTML = kapalPenumpang.setStatusTidaktersedia();
document.getElementById("object2").innerHTML = tiketKapal.infoKapal();
document.getElementById("object3").innerHTML = turunKapal.infoKapal();
document.getElementById("object4").innerHTML = kargoKapal.infoKapal();
document.getElementById("object5").innerHTML = keberangkatanKapal.infoKapal();
