// import { useDispatch } from "react-redux";
import { Album } from "../album/Album";
import { useSelector } from "react-redux";;

export const AlbumLibrary = () => {
  const albumLibrary = useSelector((state) => state.albumLibrary);
  console.log(albumLibrary.map((value, index) => console.log(value, index)))
  // Set albumList
  return (
    <div className="albums">
        {albumLibrary.map((value, index) => (
            <Album 
                key={index}
                index={index}
                album={value}
            />
        ))}
    </div>
  );
};