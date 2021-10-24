import { useContext } from "react";
import { albumContext } from "../context/albumContext";

const AlbumTable = () => {
  const context = useContext(albumContext);
  console.log(context);

  return (
    <div>
      {context.data.map((data) => (
        <div key={data.id}>
          userId: {data.userId}
          title: {data.title}
          id: {data.id}
          image: {data.image}
        </div>
      ))}
    </div>
  );
};

export default AlbumTable;
