export async function uploadToImgBB(imageFile: File) {
  // ⚠️ Never hardcode your API key directly in production
  const API_KEY = import.meta.env.VITE_IMGBB_API_KEY || process.env.REACT_APP_IMGBB_API_KEY;

  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  const data = await response.json();
  return data.data.url; // ✅ Direct link to hosted image
}