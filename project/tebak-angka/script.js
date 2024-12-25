var ulang = true;


while(ulang){
    var random = Math.floor(Math.random() * 10) + 1;
    for(var i = 1; i <=4 && i != random; i++){
        var p =prompt('Masukkan Angka Dari 1 -- 10 \n Anda punya 3 kesempatan');

            if(p > random){
                alert('Angka anda terlalu besar');
            }   else if (p == null){
                i+=5;
            }      else if ( p < random){
                alert('Angka anda terlalu kecil');
            }       else if (p == random){
                alert('Anda benar');
                i+=5;

            }          else{
                alert('Anda memasukkan input yang salah');
            }
        }

    ulang = confirm('Coba Lagi ?');
 
}

alert('Terima Kasih');
