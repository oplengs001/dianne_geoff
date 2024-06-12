import { useEffect, useState } from "react";

export default function CountdownTimer({ targetTime }) {
  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      updateDate();
    }, 1000);
  }, []);

  function updateDate() {
    const now = new Date().getTime();
    const timeleft = targetTime - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setDuration({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  return (
    <div className="flex justify-around px-10 mb-4 text-white">
      <div className="flex flex-col text-center">
        <p className="text-2xl font-medium">{`${duration.days}`}</p>
        <p>Days</p>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-2xl font-medium">{`${duration.hours}`}</p>
        <p>Hour</p>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-2xl font-medium">{`${duration.minutes}`}</p>
        <p>Min</p>
      </div>

      <div className="flex flex-col text-center text-primary-900">
        <p className="text-2xl font-medium">{`${duration.seconds}`}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
}
