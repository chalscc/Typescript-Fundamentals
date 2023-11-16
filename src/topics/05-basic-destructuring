
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details { 
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2017
    }
}

// const { song:anotherSong, details:{author, year}} = audioPlayer; // Another kind of destructuring
const { song:anotherSong, details} = audioPlayer;
const { author, year } = details;

console.log('Song: ', anotherSong);
console.log('Author: ', author);
console.log('Year: ', year);

const [p1, p2, trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 1', trunks);

export{};