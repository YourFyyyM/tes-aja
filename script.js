/* Kode Baru: Tangani klik .heart dan .letter */
document.querySelector('.heart').addEventListener('click', function() {
  // Toggle kelas flap untuk membuka amplop
  const envelopeWrapper = document.querySelector('.envelope-wrapper');
  envelopeWrapper.classList.toggle('flap');
   const audio = document.querySelector('#background-music');
  audio.play().catch(error => console.log('Autoplay blocked:', error));
});

// Tangani klik surat setelah flap aktif
document.querySelector('.letter').addEventListener('click', function() {
  const envelopeWrapper = document.querySelector('.envelope-wrapper');
  // Hanya jalankan jika flap aktif
  if (envelopeWrapper.classList.contains('flap')) {
    // Animasi menghilang
    setTimeout(() => {
      envelopeWrapper.style.transform = 'translateY(100vh)';
      envelopeWrapper.style.opacity = '0';
      document.querySelector('.envelope').style.transform = 'translateY(100vh)';
      document.querySelector('.envelope').style.opacity = '0';
      document.querySelector('.envelope-shadow').style.transform = 'translateX(-50%) translateY(100vh)';
      document.querySelector('.envelope-shadow').style.opacity = '0';
      document.querySelector('.heart').style.opacity = '0';

      // Pindahkan surat ke tengah
      const letter = document.querySelector('.letter');
      letter.classList.add('letter-only');
      document.body.appendChild(letter);
       const musicControl = document.querySelector('.music-control');
      musicControl.style.display = 'block';
    
    }, 1000); // Tunda 1 detik agar animasi flap selesai
  }
});
document.querySelector('.music-control').addEventListener('click', function() {
  const audio = document.querySelector('#background-music');
  if (audio.paused) {
    audio.play();
    this.textContent = 'Pause Music';
  } else {
    audio.pause();
    this.textContent = 'Play Music';
  }
});