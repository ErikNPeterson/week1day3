var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  
  printPlaylists: function () {
  var accessPlaylists = this.playlists;
  for(var i in accessPlaylists){
    var currentPlaylist = accessPlaylists[i];
    console.log(currentPlaylist.id + ": " + currentPlaylist.name + " contains "+ currentPlaylist.tracks.length + " tracks.");
    }
  },

  printTracks: function () {
    var accessTracks = this.tracks;
    for(let i in accessTracks){
      var currentTrack = accessTracks[i];
      console.log(currentTrack.id + ": " + currentTrack.name + " by " + currentTrack.artist + " (" + currentTrack.album + ").");
      }
    },
  printPlaylist: function (playlistId) {
    var pathToPlaylist = this.playlists[playlistId];
    console.log(pathToPlaylist.id + ": " + pathToPlaylist.name + " contains "+ pathToPlaylist.tracks.length + " tracks.");
      var tracksArray = pathToPlaylist.tracks;
      tracksArray.forEach(item => {
        var pathToTracks = this.tracks[item];
        console.log(pathToTracks.id + ": " + pathToTracks.name + " by " + pathToTracks.artist + " (" + pathToTracks.album + ").");
        });
    },

    addTrackToPlaylist: function (trackId, playlistId) {
      this.playlists[playlistId].tracks.push(trackId);
      console.log(this.playlists[playlistId]);
    },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var inputNewTrack = { id: this.uid(), 
    name: name, 
    artist: artist,
     album: album };
    this.tracks[inputNewTrack.id] = inputNewTrack;
    console.log(this.tracks);
  },

  addPlaylist: function (name) {
    var newPlaylist = { id: this.uid(),
    name: name,
    tracks: [""] };
  
    this.playlists[newPlaylist.id] = newPlaylist;
    console.log(this.playlists);
  }
}


// library.printPlaylists();
// library.printTracks();
// library.printPlaylist("p01");
// library.addTrackToPlaylist("t01", "p02");
// library.addTrack("Erik IS THE CHAMPION", "Erik", "Erik is Full Of Himself");
// library.addPlaylist("Eriks bumpin tunes!");














// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  // 
}

// addTrack("Erik IS THE CHAMPION", "Erik", "Erik is Full Of Himself");

// adds a playlist to the library

//addPlaylist("Eriks bumpin tunes!");