import axios from "axios";

export const imageUpload = async (image) => {
  const formImage = new FormData();
  formImage.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`,
    formImage
  );
  return data
};
