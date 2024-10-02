import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET() {
  const rsvps = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'rsvps'));
    querySnapshot.forEach((doc) => {
      rsvps.push({ id: doc.id, ...doc.data() });
    });
    return NextResponse.json(rsvps, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch RSVPs' }, { status: 500 });
  }
}