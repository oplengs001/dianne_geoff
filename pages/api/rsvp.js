
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        const { name, email, attending } = body;

        try {
        
            await addDoc(collection(db, 'rsvps'), {
                name,
                email,
                attending,
                createdAt: new Date(),
            });
            return res.status(200).json({ message: 'RSVP received!' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to submit RSVP' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}