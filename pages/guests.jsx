import React, { useState, useEffect } from 'react';
import GuestsList from "@/components/GuestList";
export default function Guests() {
    const [rsvps, setRsvps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/rsvp'); // Fetch data from the API route
                const data = await response.json();
                if (data.error) {
                    console.error('Failed to fetch RSVPs:', data.error);
                    return; // Handle error gracefully (e.g., display an error message)
                }
                setRsvps(data);
            } catch (error) {
                console.error('Error fetching RSVPs:', error);
                // Handle error gracefully (e.g., display an error message)
            }
        };

        fetchData();
    }, []);

    return (
        <div className={` bg-primary-900 `}>
            <GuestsList />
        </div>
    );
};

