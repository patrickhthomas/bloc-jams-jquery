class Helper {
	constructor () {	

		//const duration = player.getDuration();
		//$('#time-control .total-time').text(duration);
	}
	
		playPauseAndUpdate(song) {
		player.playPause(song);
		$('#time-control .total-time').text(player.getDuration(this));
		$('#time-control .total-time').text(song.duration);
		

}
}

const helper = new Helper();

