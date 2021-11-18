import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Lithium",
      duration: "3:33",
    },
    {
      title: "Mybe baby",
      duration: "3:50",
    },
    {
      title: "Live long enough",
      duration: "5:45",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
