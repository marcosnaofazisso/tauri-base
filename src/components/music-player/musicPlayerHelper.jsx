import song1 from '../../assets/songs/Alkaline Trio - Wash Away.mp3'
import song2 from '../../assets/songs/Blink 182 - Every Time I Look For You.mp3'
import song3 from '../../assets/songs/Blink 182 - Roller Coaster.mp3'
import song4 from '../../assets/songs/Drive Sountrack - Under Your Spell.mp3'

export const parseSongDetails = (fileName) => {
    if (!fileName || typeof fileName !== "string") {
        return { artist: "Unknown Artist", title: "Unknown Title", displayName: "Unknown.mp3" };
    }

    const decodedName = decodeURIComponent(fileName);

    const baseName = decodedName.replace(/\.[^/.]+$/, "");
    const formattedBaseName = baseName.replace(/\s+/g, "_");

    const parts = baseName.split(" - ");
    const artist = parts[0]?.trim() || "Unknown Artist";
    const title = parts[1]?.trim() || "Unknown Title";

    const displayName = `${formattedBaseName}.mp3`;

    return { artist, title, displayName };
};


const playlist = [
    { src: song1 },
    { src: song2 },
    { src: song3 },
    { src: song4 },
]

export const allSongs = playlist.map((song) => {
    const fileName = song.src.split("/").pop(); // Extract the file name
    const { artist, title, displayName } = parseSongDetails(fileName);
    return { src: song.src, artist, title, displayName };
  });