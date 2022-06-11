console.clear();
////////////////// CREATION DU TABLEAU ALBUMS //////////////////////
function Album (name, artist, image, songsList) { 
  this.name = name;
  this.artist = artist;
  this.image = image;
	this.songsList = songsList;
}

// duration en secondes
function Song (song, src, duration) { 
  this.song = song;
  this.src = src;
  this.duration = duration;
}

// Acoustic - Bensound
let ukulele = new Song('Ukulele', 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3', 146);
let cute = new Song('Cute', 'https://www.bensound.com/bensound-music/bensound-cute.mp3', 194);
let acousticBreeze = new Song('Acoustic Breeze', 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3', 217);
let buddy = new Song('Buddy', 'https://www.bensound.com/bensound-music/bensound-buddy.mp3', 182);
let sunny = new Song('Sunny', 'https://www.bensound.com/bensound-music/bensound-sunny.mp3', 200);
let tenderness = new Song('Tenderness', 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3', 183);
let sweet = new Song('Sweet', 'https://www.bensound.com/bensound-music/bensound-sweet.mp3', 307);
let aDayToRemember = new Song('A Day To Remember', 'https://www.bensound.com/bensound-music/bensound-adaytoremember.mp3', 195);
let happiness = new Song('Happiness', 'https://www.bensound.com/bensound-music/bensound-breathdeep.mp3', 261);
let smile = new Song('Smile', 'https://www.bensound.com/bensound-music/bensound-smile.mp3', 183);
let smallGuitar = new Song('Small Guitar', 'https://www.bensound.com/bensound-music/bensound-smallguitar.mp3', 202);
let acoustic = new Album('Acoustic', 'Bensound', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-design-template-0b55f32b3855ba41707a08e386e95d6e_screen.jpg?ts=1561485226', [ukulele, cute, acousticBreeze, buddy, sunny, tenderness, sweet, aDayToRemember, happiness, smile, smallGuitar]);

// Cinematic - Bensound
let memories = new Song('Memories', 'https://www.bensound.com/bensound-music/bensound-memories.mp3', 230);
let betterDays = new Song('Better Days', 'https://www.bensound.com/bensound-music/bensound-betterdays.mp3', 213);
let epic = new Song('Epic', 'https://www.bensound.com/bensound-music/bensound-epic.mp3', 238);
let onceAgain = new Song('Once Again', 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3', 231);
let tomorrow = new Song('Tomorrow', 'https://www.bensound.com/bensound-music/bensound-tomorrow.mp3', 294);
let slowMotion = new Song('Slow Motion', 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', 306);
let adventure = new Song('Adventure', 'https://www.bensound.com/bensound-music/bensound-adventure.mp3', 179);
let evolution = new Song('Evolution', 'https://www.bensound.com/bensound-music/bensound-evolution.mp3', 165);
let pianoMoment = new Song('Piano Moment', 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3', 110);
let newDawn = new Song('New Dawn', 'https://www.bensound.com/bensound-music/bensound-newdawn.mp3', 313);
let theDuel = new Song('The Duel', 'https://www.bensound.com/bensound-music/bensound-theduel.mp3', 118);
let deepBlue = new Song('Deep Blue', 'https://www.bensound.com/bensound-music/bensound-deepblue.mp3', 288);
let cinematic = new Album('Cinematic', 'Bensound', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cloud-album-art-illustration-album-cover-design-template-6aca29157d6af5b72297c14f1119c5fc_screen.jpg?ts=1607596072', [memories, betterDays, epic, onceAgain, tomorrow, slowMotion, adventure, evolution, pianoMoment, newDawn, theDuel, deepBlue]);

// Pop - Bensound
let creativeMinds = new Song('Creative Minds', 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3', 147);
let littleIdea = new Song('Little Idea', 'https://www.bensound.com/bensound-music/bensound-littleidea.mp3', 169);
let hey = new Song('Hey!', 'https://www.bensound.com/bensound-music/bensound-hey.mp3', 172);
let energy = new Song('Energy', 'https://www.bensound.com/bensound-music/bensound-energy.mp3', 179);
let clearDay = new Song('Clear Day', 'https://www.bensound.com/bensound-music/bensound-clearday.mp3', 89);
let funkyElement = new Song('Funky Element', 'https://www.bensound.com/bensound-music/bensound-funkyelement.mp3', 189);
let inspire = new Song('Inspire', 'https://www.bensound.com/bensound-music/bensound-inspire.mp3', 213);
let perception = new Song('Perception', 'https://www.bensound.com/bensound-music/bensound-perception.mp3', 162);
let pop = new Album('Pop', 'Bensound', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/stylish-minimal-gold-album-song-cover-art-design-template-615cce43b81d0941008c60705c14709d_screen.jpg?ts=1635272591', [creativeMinds, littleIdea, hey, energy, clearDay, funkyElement, inspire, perception]);

// Electronica - Bensound
let dreams = new Song('Dreams', 'https://www.bensound.com/bensound-music/bensound-dreams.mp3', 210);
let dubstep = new Song('Dubstep', 'https://www.bensound.com/bensound-music/bensound-dubstep.mp3', 124);
let endlessMotion = new Song('Endless Motion', 'https://www.bensound.com/bensound-music/bensound-endlessmotion.mp3', 180);
let moose = new Song('Moose', 'https://www.bensound.com/bensound-music/bensound-moose.mp3', 160);
let erf = new Song('E.R.F.', 'https://www.bensound.com/bensound-music/bensound-erf.mp3', 281);
let sciFi = new Song('Sci Fi', 'https://www.bensound.com/bensound-music/bensound-scifi.mp3', 284);
let popDance = new Song('Pop Dance', 'https://www.bensound.com/bensound-music/bensound-popdance.mp3', 161);
let dance = new Song('Dance', 'https://www.bensound.com/bensound-music/bensound-dance.mp3', 177);
let house = new Song('House', 'https://www.bensound.com/bensound-music/bensound-house.mp3', 259);
let blueSun = new Song('Blue Sun', 'https://www.bensound.com/bensound-music/bensound-bluesun.mp3', 173);
let electronica = new Album('Electronica', 'Bensound', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/space-vinyl-album-song-video-cover-design-template-424e77bcb01d645e6fcb952dba2e2acb_screen.jpg?ts=1615203634', [dreams, dubstep, endlessMotion, moose, erf, sciFi, popDance, dance, house, blueSun]);

const AlbumList = [];
AlbumList.push(acoustic, cinematic, pop, electronica, acoustic, cinematic);

//////////////////////// APP ///////////////////////////////

//Apparition et positionnement des albums
let topPosition = 0;
let previousSVG = '<svg class="previousSVG" viewBox="0 0 448 512" width="100" title="angle-double-left"><path fill="currentColor" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" /></svg>';
let playSVG = '<svg class="playSVG" viewBox="0 0 448 512" width="100" title="play"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>';
let pauseSVG = '<svg class="pauseSVG" viewBox="0 0 448 512" width="100" title="pause"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" /></svg>';
let nextSVG = '<svg class="nextSVG" viewBox="0 0 448 512" width="100" title="angle-double-right"><path  fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"/></svg>';
let repeatSVG = '<svg class="repeatSVG" viewBox="0 0 512 512" width="100" title="sync-alt"><path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z" /></svg>';
let randomSVG = '<svg class="randomSVG" viewBox="0 0 512 512" width="100" title="random"><path fill="currentColor" d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"/></svg>';
let volume = '<svg class="volumeOn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g transform="matrix(.1615 0 0 .1615 1.7 1.638)" fill-opacity="1" fill="#4d4d4d"><path fill="currentColor" d="m57.57 8.464c-1.412 0-2.634.517-3.666 1.548l-27.13 27.13h-21.346c-1.413 0-2.635.517-3.667 1.548-1.032 1.032-1.548 2.255-1.548 3.667v31.28c0 1.412.516 2.635 1.548 3.666 1.033 1.032 2.255 1.549 3.667 1.549h21.345l27.13 27.13c1.032 1.031 2.254 1.548 3.666 1.548 1.413 0 2.635-.517 3.667-1.548 1.032-1.031 1.548-2.254 1.548-3.666v-88.64c0-1.412-.516-2.635-1.547-3.667-1.033-1.031-2.254-1.548-3.667-1.548"/><path fill="currentColor" d="m90.61 69.53c2.309-3.557 3.463-7.399 3.463-11.527 0-4.128-1.154-7.988-3.463-11.573-2.31-3.585-5.363-6.11-9.166-7.577-.543-.271-1.223-.407-2.037-.407-1.412 0-2.635.503-3.666 1.507-1.031 1.01-1.549 2.241-1.549 3.707 0 1.141.326 2.105.979 2.893.652.788 1.439 1.467 2.363 2.037.922.57 1.846 1.195 2.77 1.874.924.679 1.711 1.643 2.363 2.892.65 1.25.977 2.798.977 4.645 0 1.847-.326 3.395-.977 4.645-.652 1.25-1.439 2.213-2.363 2.893-.924.679-1.848 1.304-2.77 1.874-.924.569-1.711 1.249-2.363 2.036-.652.789-.979 1.752-.979 2.893 0 1.467.518 2.702 1.549 3.707 1.031 1 2.254 1.508 3.666 1.508.814 0 1.494-.136 2.037-.406 3.803-1.523 6.857-4.063 9.166-7.621"/><path fill="currentColor" d="m108 81.02c4.617-7.03 6.926-14.705 6.926-23.02 0-8.311-2.309-15.982-6.926-23.02-4.617-7.03-10.729-12.152-18.332-15.357-.705-.271-1.412-.407-2.117-.407-1.412 0-2.635.516-3.668 1.548-1.031 1.032-1.547 2.254-1.547 3.666 0 2.119 1.059 3.721 3.178 4.808 3.041 1.575 5.105 2.77 6.191 3.584 4.02 2.934 7.156 6.613 9.41 11.04 2.254 4.427 3.381 9.139 3.381 14.14 0 4.997-1.127 9.709-3.381 14.14-2.254 4.428-5.391 8.106-9.41 11.04-1.086.815-3.15 2.01-6.191 3.585-2.119 1.087-3.178 2.689-3.178 4.808 0 1.412.516 2.635 1.547 3.666 1.033 1.033 2.281 1.549 3.748 1.549.652 0 1.332-.137 2.037-.407 7.603-3.206 13.715-8.325 18.332-15.359"/></g></svg>';
let mute = '<svg class="volumeOff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><g transform="matrix(.1615 0 0 .1615 1.91 1.638)" fill-opacity="1" fill="#4d4d4d"><path fill="currentColor" d="m57.57 8.464c-1.412 0-2.634.517-3.666 1.548l-27.13 27.13h-21.346c-1.413 0-2.635.517-3.667 1.548-1.032 1.032-1.548 2.255-1.548 3.667v31.28c0 1.412.516 2.635 1.548 3.666 1.033 1.032 2.255 1.549 3.667 1.549h21.345l27.13 27.13c1.032 1.031 2.254 1.548 3.666 1.548 1.413 0 2.635-.517 3.667-1.548 1.032-1.031 1.548-2.254 1.548-3.666v-88.64c0-1.412-.516-2.635-1.547-3.667-1.033-1.031-2.254-1.548-3.667-1.548"/><path fill="currentColor" d="m68.989 48l23.953-23.953c1.521-1.52 2.281-3.367 2.281-5.54 0-2.173-.761-4.02-2.281-5.54l-11.08-11.08c-1.521-1.521-3.367-2.281-5.539-2.281-2.174 0-4.02.76-5.541 2.281l-23.953 23.953-23.953-23.953c-1.52-1.521-3.367-2.281-5.54-2.281-2.172 0-4.02.76-5.54 2.281l-11.08 11.08c-1.52 1.52-2.281 3.367-2.281 5.54 0 2.173.76 4.02 2.281 5.54l23.953 23.953-23.953 23.953c-1.52 1.521-2.281 3.367-2.281 5.54 0 2.173.76 4.02 2.281 5.54l11.08 11.08c1.521 1.521 3.368 2.281 5.54 2.281 2.173 0 4.02-.761 5.54-2.281l23.953-23.953 23.954 23.953c1.521 1.521 3.366 2.281 5.541 2.281 2.172 0 4.02-.761 5.539-2.281l11.08-11.08c1.521-1.52 2.281-3.367 2.281-5.54 0-2.173-.76-4.02-2.281-5.54l-23.953-23.953" transform="matrix(.45902 0 0 .45902 68.7 38.09)"/></g></svg>';
let player = '<div class="player"><span class="timer"><span class="duration"></span></span><p class="currentDuration"></p><p class="fullDuration"></p><div class="volume">'+ volume + mute +'</div><div class="buttonPlayer">'+ previousSVG + playSVG + pauseSVG + nextSVG + '<div class="options">' + repeatSVG + randomSVG + '</div></div></div>';

let switchPositionTop = true;
let switchPositionLeft = true;
let verticalSpacing = 250;
let maxSong = 1;
$.each(AlbumList, ( index, value ) => {
	if(value.songsList.length > maxSong) maxSong = value.songsList.length;
	//Création de la liste des morceaux
	let songList = "";
	$.each(value.songsList, ( index, value ) => {
		let indexSongList = index + 1;
		songList += "<li>" + indexSongList + ". " + value.song + "</li>";
	});
	
	// Insertion du html dans le DOM
	$(".albums").append("<div id='"+index+"'><div class='albumContainer'><img src="+value.image+"><svg viewBox='0 0 512 512' width='100' title='play-circle'><path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z' /></svg></div>"+ player +"<ol class='songList'>" + songList + "</ol><p>"+value.name+"</p><p>"+value.artist+"</p></div>");

	//Positionnement des albums
	let albumIndex = index;
	$(".albums").children(":nth-child("+(index+1)+")").css({
		"top": function(){ 
			if($(window).width() > 1200){
				if(albumIndex == 0){
					topPosition += verticalSpacing;
					return topPosition
				} else if (albumIndex%2 == 0 && !switchPositionTop){
					verticalSpacing = 150;
					topPosition += verticalSpacing + $(this).width();
					switchPositionTop = true;
					return topPosition
				} else if (albumIndex%2 == 0 && switchPositionTop && albumIndex > 0){ 
					switchPositionTop = false;
					return topPosition + "px";
				} else {					
					return topPosition + "px";
				}
			} else {
				if(albumIndex%2 == 0 && albumIndex <= 1){
					topPosition += verticalSpacing;
					return topPosition + "px";
				} else if (albumIndex%2 == 0 && albumIndex > 1){
					topPosition += verticalSpacing + $(this).width();
					return topPosition + "px";
				} else {
					verticalSpacing = 150;
					return topPosition + "px";
				}
			}
		}, 
		"left": function(){ 
			if($(window).width() > 1200){
				if(albumIndex%2 == 0 && switchPositionLeft){
						let leftPosition = "7.5%";
						return leftPosition
				}	else if (albumIndex%2 != 0 && switchPositionLeft){
						let leftPosition = "31.5%";
						switchPositionLeft = false;
						return leftPosition
				}	else if (albumIndex%2 == 0 && !switchPositionLeft){
						let leftPosition = "55.5%";
						return leftPosition
				} else if (albumIndex%2 != 0 && !switchPositionLeft){
						let leftPosition = "79.5%";
						switchPositionLeft = true;
						return leftPosition
				}
			} else {
				if(albumIndex%2 == 0)
					{let leftPosition = "15%"; return leftPosition}
				else
					{let leftPosition = "60%"; return leftPosition}	
			}
		}
	});
});

//Ajouter les transitions sur les morceaux
const addSongTransition = (album) => {
	for(let i = 1; i <= maxSong; i++){
		let indexTransition = i + 2
		if(indexTransition < 10){
			album.find('.songList li:nth-of-type('+i+')').css({
				"transition": "transform 0.2s ease-out 0."+indexTransition+"s",
			});
		} else if (indexTransition%10 == 0) {
			album.find('.songList li:nth-of-type('+i+')').css({
				"transition": "transform 0.2s ease-out "+indexTransition.toString().slice(0, 1)+"s",
			});
		} else if (indexTransition > 10 && indexTransition%10 != 0) {
			album.find('.songList li:nth-of-type('+i+')').css({
				"transition": "transform 0.2s ease-out "+indexTransition.toString().slice(0 , 1)+"."+indexTransition%10+"s",
			});
		};
	}
}

//Supprimer les transitions des morceaux
const deleteSongTransition = (album) => {
	album.find('.songList').children().each(function() {
		$(this).css("transition", "transform 0s");
	})
}

let originalPositionTop;
let originalPositionLeft;
//Effet de disparition et de déplacement des albums
$(".albums").children().each(function() {
	$(this).find('.albumContainer').on('click', function() {
		currentAlbum = $(this).parent();
		//Bloquer le fonctionnement du click quand un album est actif
		if(!$(".albums").children().hasClass('active')){
			
			//Conserver la position d'origine pour revenir en arrière
			originalPositionTop = currentAlbum.css("top");
			originalPositionLeft = currentAlbum.css("left");

			//Ajout des transitions
			addSongTransition(currentAlbum);
			let olSongList = currentAlbum.children()[2];
			
			//Repositionner l'album
			let activeDivHeight;
			let albumPlayerHeight = $('.albumContainer').height() + $('.player').height();
			$(window).width() > 1200 ? olSongList.offsetHeight < albumPlayerHeight + 46 ? activeDivHeight = albumPlayerHeight + 60 : activeDivHeight = olSongList.offsetHeight : activeDivHeight = olSongList.offsetHeight + albumPlayerHeight + 80;
			
			currentAlbum.addClass('active').css({
				"top": "150px",
				"left": function(){
					return "calc(50% - " + getComputedStyle(document.documentElement).getPropertyValue('--player-size') + "/2)"
				},
				"height": activeDivHeight,
			});
			$(".albums").children().not(currentAlbum).addClass("hidden");
			$("#arrowLeft").addClass('active');
			let delayedScrollUp = window.setTimeout(() => {$('html, body').animate({scrollTop: 0}, 600)}, 200);

			//Lancement musique
			playAlbum(currentAlbum);
			clickSong(currentAlbum);
		};
	});
});

//Revenir en arrière
$('#arrowLeft').on('click', function(){
	$(".albums").children().each(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).css({
				"top": originalPositionTop,
				"left": originalPositionLeft,
				"height": getComputedStyle(document.documentElement).getPropertyValue('--album-size'),
			});
			let ancreScrollBack = originalPositionTop.slice(0, -2) - 50;
			let delayedScrollDown = window.setTimeout(() => {$('html, body').animate({scrollTop: ancreScrollBack}, 600)}, 200);
		} else {
			$(this).removeClass('hidden');
		};
	});
	$("#arrowLeft").removeClass('active');
	deleteSongTransition(currentAlbum);
	stopMusic($(this));
});

////////////// PLAYER //////////////
let currentAlbum;
const AUDIO = $('#audio')[0];
let albumSongsList = {};
let indexCurrentSong = 0;
let currentSong;
let fullDuration = "";
let currentDuration = "";
let isPlayed = false;
let soundOn = true;
let repeat = false;
let random = false;

//Click Play
$('.playSVG').on('click', function() {
	AUDIO.play();
	isPlayed = true;
	switchDisplay('play');
});

//Click Pause
$('.pauseSVG').on('click', function() {
	AUDIO.pause();
	isPlayed = false;
	switchDisplay('play');
});

//Click Next
$('.nextSVG').on('click', function() {
	nextPrevSong("next");
});

//Click Previous
$('.previousSVG').on('click', function() {
	nextPrevSong("previous");
});

//Click Repeat
$('.repeatSVG').on('click', function() {
	changeOption($(this));
	repeat = !repeat;
});

//Click Random
$('.randomSVG').on('click', function() {
	changeOption($(this));
	random = !random;
	if(random){
		albumSongsList = shuffle(albumSongsList);
	} else {
		albumSongsList = JSON.parse(JSON.stringify(AlbumList[currentAlbum.get(0).id].songsList));
		$('.active .songList li').each(function(){
			if($(this).text().includes(currentSong)) indexCurrentSong = parseInt($(this).text()) - 1;
		});
	}
});

//Click Song
const clickSong = () => {
	$('.active .songList').children().each(function(){
		$(this).on('click', function(){
			if (random) {
				let thisSong = $(this).get(0).innerHTML.split('.')[1].trim();
				let arraySong = albumSongsList.find(obj => obj.song === thisSong)
				indexCurrentSong = albumSongsList.indexOf(arraySong)
				playSong(indexCurrentSong);
			} else {
				let indexSong = parseInt($(this).get(0).innerHTML.split('.')[0]) - 1;
				indexCurrentSong = indexSong;
				playSong(indexSong);
			};
		});
	});
};

//Click Volume
$('.volume').on('click', function() {
	switchDisplay('volume');
	soundOn = !soundOn;
	AUDIO.muted = !AUDIO.muted;
});

//Click timer
$('.timer').on('click', function(e){
	let percentProgress = e.offsetX / $(this).width();
	let song = albumSongsList.find(obj => obj.song === currentSong);
	AUDIO.currentTime = song.duration * percentProgress;
});

const switchDisplay = (button) => {
	let buttonSwitch, svg1, svg2;

	switch(button){
		case 'play': 
			buttonSwitch = isPlayed;
			svg1 = '.playSVG';
			svg2 = '.pauseSVG';
			break;
		case 'volume':
			buttonSwitch = soundOn;
			svg1 = '.volumeOn';
			svg2 = '.volumeOff';
			break;
		default :
			console.log('no case button');
	}

	if(buttonSwitch){
		$(svg1).css("display", "none");
		$(svg2).css("display", "block");
	} else {
		$(svg2).css("display", "none");
		$(svg1).css("display", "block");
	}
}

const changeOption = (button) => {
	button.hasClass('active') ? button.removeClass('active') : button.addClass('active');
}

const playAlbum = (album) => {
	//Définir la playlist et le morceau joué
	albumSongsList = JSON.parse(JSON.stringify(AlbumList[album.get(0).id].songsList));
	firstSong = albumSongsList[0];
	
	//Ajouter Lien dans l'audio
	AUDIO.src = firstSong.src;
	currentSong = firstSong.song;
	
	resetTimers(firstSong);
	
	//Lancement avec délai
	let delay = album.children()[2].childNodes.length * 100;
	let delayedPlayAlbum = window.setTimeout(() => {
		isPlayed = true;
		switchDisplay('play');
		$('.active .songList li:first-of-type').addClass('played');
		audio.play();
	}, delay);
};

const stopMusic = () => {
	isPlayed = false;
	switchDisplay('play');
	AUDIO.pause();
	AUDIO.src = "";
	indexCurrentSong = 0;
	let delayedResetPDuration = window.setTimeout(function(){
		$('.songList li').removeClass('played');
		$(".fullDuration").empty();
		$(".currentDuration").empty();
	}, 400);
};

const nextPrevSong = (change) => {
	//NEXT
	if(change == "next"){
		//NORMAL
		if(indexCurrentSong < albumSongsList.length - 1){
			indexCurrentSong += 1;
			playSong(indexCurrentSong);
		//REPEAT
		} else if (indexCurrentSong == albumSongsList.length - 1 && repeat){
			indexCurrentSong = 0;
			playSong(indexCurrentSong);
		}
	//PREVIOUS
	} else {
		//RETOUR AU DEBUT DU MORCEAU SI DEJA LANCE
		if (AUDIO.currentTime > 0.2){
			playSong(indexCurrentSong);
		} else {
			//NORMAL
			if(indexCurrentSong > 0){
				indexCurrentSong -= 1;
				playSong(indexCurrentSong);
			//REPEAT
			} else if (indexCurrentSong == 0 && repeat){
				indexCurrentSong = albumSongsList.length - 1;
				playSong(indexCurrentSong);
			}
		}
	}
}

const playSong = (indexSong) => {
	let song = albumSongsList[indexSong];
	currentSong = song.song;
	
	$('.active .songList li').removeClass('played');
	$('.active .songList li').each(function(){
		if($(this).text().split('. ')[1] == currentSong) $(this).addClass('played');
	});

	resetTimers(song);

	AUDIO.src = song.src;
	AUDIO.play();
	isPlayed = true;
	switchDisplay('play');
}

//Modifier les timers selon la chanson
const resetTimers = (song) => {
	$(".fullDuration").empty();
	$(".currentDuration").empty();
	
	calculDuration(song.duration);
	$(".fullDuration").append(newDuration);
	
	currentDuration = "00:00";
	$(".currentDuration").append(currentDuration);
}

//Actualise le temps d'avancée du morceau
const updateCurrentDuration = () => {
	calculDuration(AUDIO.currentTime);
	$(".currentDuration").empty();
	$(".currentDuration").append(newDuration);
}

const calculDuration = (duration) => {
	let initialDuration = Math.floor(duration);
	let secondsDuration = initialDuration%60;
	if (secondsDuration < 10){
		secondsDuration = '0' + secondsDuration;
	}
	let minuteDuration = (initialDuration/60).toString().split('.')[0];
	if (minuteDuration < 10){
		minuteDuration = '0' + minuteDuration;
	}
	newDuration = minuteDuration + ':' + secondsDuration;
	return newDuration
}

//Gestion de la barre de progression du morceau
const timerProgress = () => {
  let percent = (AUDIO.currentTime / AUDIO.duration) * 100;
  $('.duration').css("width", percent+"%");
  if (percent === 100) {
    nextPrevSong("next");
  };
};

AUDIO.addEventListener('timeupdate', timerProgress);
AUDIO.addEventListener('timeupdate', updateCurrentDuration);

//Random
const shuffle = (sourceArray)  => {
  for (let i = 0; i < sourceArray.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (sourceArray.length - i));

      let temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
  }
  return sourceArray;
}
