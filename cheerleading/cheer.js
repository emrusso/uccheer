'use strict';

const sortAlpha = (a, b, callback) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return callback ? callback() : 0;
};

angular.module('uccheerApp', []).controller('CheerController', function ($http) {
  var uccheerApp = this;

  this.roster = roster.sort((a, b) => (
    sortAlpha(a.lastName, b.lastName, () => sortAlpha(a.firstName, b.firstName))
  ));

  for (let i in this.roster) {
    const cheerleader = this.roster[i]
    if (cheerleader.hasRosterPic) {
      cheerleader.photo = `Media/roster_photos/${cheerleader.firstName.replace("'", '')}${cheerleader.lastName.replace(' ', '')}.jpg`;
      cheerleader.backgroundImageStyle = { 'background-image': `url(${cheerleader.photo})` };
      cheerleader.class = "roster-info";
    } else {
      cheerleader.photo = "";
      cheerleader.class = "roster-info-nm"
    }
    cheerleader.name = cheerleader.firstName + " " + cheerleader.lastName;
  }

  this.albums = new Array();
  this.albums[0] = new PhotoAlbum("Football 2014", "Media/FB14.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157679204078342");
  this.albums[1] = new PhotoAlbum("Basketball 2015", "Media/BB15.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157679203855652");
  this.albums[2] = new PhotoAlbum("Football 2015", "Media/FB15.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157681507976796");
  this.albums[3] = new PhotoAlbum("Football 2016", "Media/FB16.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157681542655945");
});


var RosterEntry = function (firstName, lastName, year, major, position, hometown, hs, old) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.year = year;
  this.major = major;
  this.position = position;
  this.hometown = hometown;
  this.hs = hs;
  this.link = firstName + ".html";

  this.old = old;
  if (old) {
    this.photo = "Media/roster_photos/Roster" + firstName + ".jpg";
    this.class = "roster-info";
  } else {
    this.photo = "";
    this.class = "roster-info-nm"
  }
  this.name = firstName + " " + lastName;
}

var PhotoAlbum = function (title, cover, link) {
  this.title = title;
  this.cover = cover;
  this.link = link;
}
