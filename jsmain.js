class Game {
    constructor() {
    //   this.batuP = new BatuP(".batu-1 button"); //batu player
    //   this.batuC = new BatuC(".batu-2 img"); // batu computer
    //   this.guntingP = new GuntingP(".gunting-1 img"); // gunting Player
    //   this.guntingC = new GuntingC(".gunting-2 img"); // gunting Computer
    //   this.kertasP = new KertasP(".kertas-1 img"); // Kertas Player
    //   this.kertasC = new KertasC(".kertas-2 img"); //Kertas Computer
    //   this.giliran = "anda"; // Nilai ini hanya boleh "anda" atau "computer"
  
        this.controlKeterangan = document.querySelector(
            ".rec .keterangan"
        );
    
        //   this.controlAngka = document.querySelector("#game-control .angka");
        //   this.controlAngka.textContent = 0;
    

        this.controlButton = document.querySelector(".batu-1 button");
        console.log(this.controlButton);
        this.controlButton.addEventListener("click", () => {
            console.log('test');
            this.batu();
        });

        this.controlButton2 = document.querySelector(".kertas-1 button");
        console.log(this.controlButton2);
        this.controlButton2.addEventListener("click", () => {
        console.log('test');
        this.kertas();
        });

        this.controlButton3 = document.querySelector(".gunting-1 button");
        console.log(this.controlButton3);
        this.controlButton3.addEventListener("click", () => {
            console.log('test');
            this.gunting();
        });
      

    }
  
    batu() {
    
      let nilai = 1;
      let angka;
      const interval = setInterval(() => {
        angka = Math.ceil(Math.random() * 3); // Random 1-5
        
  
        // this.controlAngka.textContent = angka;
      }, 50); // 50 = 0.05 detik
  
      // Interval berhenti di detik ke-2
      setTimeout(() => {
        clearInterval(interval);
  
        // this.controlAngka.style.color = null;
  
        this.com(angka,nilai);
        
      }, 2000); // 500 = 2 detik

    }

    
    gunting() {
    
        let nilai = 2;
        let angka;
        const interval = setInterval(() => {
          angka = Math.ceil(Math.random() * 3); // Random 1-3
    
          // this.controlAngka.textContent = angka;
        }, 50); // 50 = 0.05 detik
    
        // Interval berhenti di detik ke-2
        setTimeout(() => {
          clearInterval(interval);
    
          // this.controlAngka.style.color = null;
    
          this.com(angka,nilai);
        }, 2000); // 500 = 2 detik
      }
  
    com(angka,nilai){
        if(angka===nilai){
        //   this.controlKeterangan.style.display = null;
        console.log(angka);
        console.log(nilai);
        this.controlKeterangan.textContent="player won";
        } 
        
        else if(angka > nilai){
        console.log(angka);
        console.log(nilai);
        this.controlKeterangan.textContent="Com Won";

        }else{
        console.log(angka);
        console.log(nilai);
        this.controlKeterangan.textContent="Draw";

        }

    }
    // tampilkanHasil(angka) {
    //   if (this.giliran === "anda") {
    //     this.mobilAnda.pindahPosisi(angka);
    //   } else if (this.giliran === "robot") {
    //     this.mobilRobot.pindahPosisi(angka);
    //   }
  
    //   setTimeout(() => {
    //     if (this.giliran === "anda" && this.mobilAnda.posisiSaatIni === 20) {
    //       this.tampilkanPemenang();
    //       return;
    //     } else if (
    //       this.giliran === "robot" &&
    //       this.mobilRobot.posisiSaatIni === 20
    //     ) {
    //       this.tampilkanPemenang();
    //       return;
    //     }
  
    //     // Kode dibawah untuk mengubah giliran
    //     if (this.giliran === "anda") {
    //       this.giliran = "robot";
  
    //       this.controlKeterangan.textContent = "Giliran Robot";
  
    //       // Robot langsung mengacak angkanya
    //       this.acakAngka();
    //     } else if (this.giliran === "robot") {
    //       this.giliran = "anda";
  
    //       this.controlKeterangan.textContent = "Giliran Anda";
  
    //       // Kembalikan control button seperti semula
    //       this.controlButton.style.display = null;
    //     }
    //   }, 1000); // 1000 = 1 detik
    // }
  
    // tampilkanPemenang() {
    //   // Tampilkan kembali overlay
    //   const overlay = document.querySelector("#overlay");
    //   overlay.style.display = null;
  
    //   // Ubah text overlay
    //   const overlayTitle = document.querySelector("#overlay .title");
    //   if (this.giliran === "anda") {
    //     overlayTitle.textContent = "Selamat, anda menang!";
    //   } else if (this.giliran === "robot") {
    //     overlayTitle.textContent = "Yah, anda kalah :(";
    //   }
  
    //   const overlayButton = document.querySelector("#overlay button");
    //   overlayButton.textContent = "Main lagi";
    // }
  }

  new Game ();