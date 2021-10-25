import { useParams } from "react-router-dom";

interface UrlParams {
  id: string;
}

const UpdatePage = () => {
  const { id } = useParams<UrlParams>();

  return <div>Editing page {id}</div>;
};

export default UpdatePage;
