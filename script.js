document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Spotify.');
      
      });
      
    // Initialize variables
    let songIndex = 0;
    const audioElement = new Audio();
    const gifElement = document.getElementById('gif');
    const masterPlay = document.getElementById('masterPlay');
    const myProgressBar = document.getElementById('myProgressBar');
    const songInformation = document.querySelector('.songInformation');
    
    const songs = [
      {
        songName: 'Fuzzy Brain',
        filePath: 'file:///C:\Users\pc\Downloads\shipwreck.mp3',
        coverPath: 'file:///C:\Users\pc\OneDrive\bg.jpeg',
      },
      {
        songName: 'Shipwreck',
        filePath: 'file:///C:\Users\pc\Downloads\journey-end(chosic.com).mp3',
        coverPath: 'file:///C:\Users\pc\OneDrive\Pictures\IMG-20230825-WA0001.jpg',
      },
      // Add more songs here...
    ];
    
    // Function to load a song
    const loadSong = (songIndex) => {
      const song = songs[songIndex];
      audioElement.src = song.filePath;
      audioElement.load();
      songInformation.innerHTML = `<img src="${song.coverPath}" width="42px" alt=""> ${song.songName}`;
    };
    
    // Load the initial song
    loadSong(songIndex);
    
    // Play or pause the song
    masterPlay.addEventListener('click', () => {
      if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gifElement.style.opacity = '1';
      } else {
        audioElement.pause();
        gifElement.style.opacity = '0';
      }
    });
    
    // Update the progress bar
    audioElement.addEventListener('timeupdate', () => {
      const currentTime = audioElement.currentTime;
      const duration = audioElement.duration;
      const progressPercentage = (currentTime / duration) * 100;
      myProgressBar.value = progressPercentage;
    });
    
    // Handle when the progress bar is clicked
    myProgressBar.addEventListener('click', (e) => {
      const progressBar = e.target;
      const clickX = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const seekTime = (clickX / progressBarWidth) * audioElement.duration;
      audioElement.currentTime = seekTime;
    });
    
    // Play the next song
    const playNextSong = () => {
      songIndex = (songIndex + 1) % songs.length;
      loadSong(songIndex);
      audioElement.play();
      gifElement.style.opacity = '1';
    };
    
    // Play the previous song
    const playPreviousSong = () => {
      songIndex = (songIndex - 1 + songs.length) % songs.length;
      loadSong(songIndex);
      audioElement.play();
      gifElement.style.opacity = '1';
    };
    
    // Handle next and previous button clicks
    document.getElementById('nextSong').addEventListener('click', fa-step-forward);
    document.getElementById('prevSong').addEventListener('click', fa-step-forward);
  ;
  