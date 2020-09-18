class Player {
  constructor () {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  getDuration() {
    return this.soundObject.getDuration();
  }

  getTime() {
    return this.soundObject.getTime();
  }


  // toggles between play and pause
  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      // Stop the currently playing sound file (even if nothing is playing)
      this.soundObject.stop();
      // Clear classes on the song that's currently playing
      this.currentlyPlaying.element.removeClass('playing paused');
      
      // Update our currentlyPlaying and playState properties
      this.currentlyPlaying = song;
      this.playState = 'stopped';
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      // Sets the volume level, even if nothing is playing
      this.soundObject.setVolume( this.volume );
      // Start playing audio file
      this.soundObject.play();
      // Changes play state to "playing"
      this.playState = 'playing';
      // Removes paused class from play status replaces with playing
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
    } else {
      // Pauses currently playing sound
      this.soundObject.pause();
      // Changes play state to paused
      this.playState = 'paused';
      // Removes playing class from play status replaces with paused
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
  }
  
  skipTo (percent) {
    if (this.playState !== 'playing') { return }
      //skips to location in song
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }
  
  setVolume (percent) {
    this.volume = percent;
    //sets song volume
    this.soundObject.setVolume(percent);
  }
}

const player = new Player();

