import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle POST requests as before (adding new RSVPs)
    const body = req.body;
    const { name, wishes } = body;

    try {
      await addDoc(collection(db, "wishes"), {
        name,
        wishes,
        createdAt: new Date(),
      });
      return res.status(200).json({ message: "wish received!" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to submit wish" });
    }
  } else if (req.method === "GET") {
    // Handle GET requests (retrieving all Wishes)
    try {
      const querySnapshot = await getDocs(collection(db, "wishes"));
      const wishes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return res.status(200).json(wishes);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch wishes" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
