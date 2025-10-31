import { getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const db = getFirestore(app);

export async function saveReviewToFirestore(name: string, rating: number, message: string, photoUrl?: string) {
  try {
    await addDoc(collection(db, "reviews"), {
      name,
      rating,
      message,
      photoUrl,
      createdAt: serverTimestamp(),
    });
    console.log("✅ Review saved to Firestore");
  } catch (error) {
    console.error("Error saving review:", error);
    throw error;
  }
}