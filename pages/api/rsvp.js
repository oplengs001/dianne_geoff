import { db } from '../../lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Handle POST requests as before (adding new RSVPs)
        const body = req.body;
        const { name, email, number, attending } = body;

        try {
            await addDoc(collection(db, 'rsvps'), {
                name,
                email,
                number,
                attending,
                createdAt: new Date(),
            });
            return res.status(200).json({ message: 'RSVP received!' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to submit RSVP' });
        }
    } else if (req.method === 'GET') {
        // Handle GET requests (retrieving all RSVPs)
        try {
            const querySnapshot = await getDocs(collection(db, 'rsvps'));
            const rsvps = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return res.status(200).json(rsvps);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch RSVPs' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}