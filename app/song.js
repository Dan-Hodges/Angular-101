app.controller("SongCtrl", function($scope){
	$scope.title = "Welcome to your task list";
	// $scope.macaroni = '';

	$scope.songs = [
		{
    title: "Legs",
    artist: "ZZ Top",
    album: "Eliminator"
    },
    {
    title: "Logical Song",
    artist: "Supertramp",
    album: "Breakfast in America"
    },
    {
    title: "Another Brick in the Wall",
    artist: "Pink Floyd",
    album: "The Wall"
    }
	];

	$scope.killSong = function(Song) {
	  var SongIndex = $scope.Songs.indexOf(Song);
	  if (SongIndex >= 0) {
	    $scope.Songs.splice(SongIndex, 1);
	  }
	};

	$scope.addSong = function() {
		$scope.songs.push({
			title: $scope.song.title,
			artist: $scope.song.artist, 
			album: $scope.song.album
		});
	}
});