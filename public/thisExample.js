function printSong(){
	console.log('Global Object');
}

const jukebox = {
	songs: [
		{
			title: 'What makes you special',
			artist: 'JLab'
		},
		{
			title: 'What makes you really special',
			artist: 'JLab Inc'
		}
	],

	printSong: function(song) {
		console.log(song.title);
	},

	printSongs: function(){
		//this bound to object
		this.songs.forEach(function(song){
			//this is now bound to global object BAD
			this.printSong(song);
		});
	},
	printSongsBind: function(){
		this.songs.forEach(song => this.printSong(song))
		//this is bound correctly
	}
}

jukebox.printSongs();
jukebox.printSongsBind();