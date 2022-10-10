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

  export default AlbumList;