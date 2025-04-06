import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UrgentOffers() {
    const [timeLeft, setTimeLeft] = useState({
        days: 23,
        hours: 5,
        minutes: 59,
        seconds: 35
    });

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = { ...prevTime };

                if (newTime.seconds > 0) newTime.seconds--;
                else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) newTime.minutes--;
                    else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) newTime.hours--;
                        else {
                            newTime.hours = 23;
                            if (newTime.days > 0) newTime.days--;
                        }
                    }
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format time with leading zero
    const formatTime = (time) => time.toString().padStart(2, '0');

    return (
        <section className="bg-black text-white my-16 px-6 md:mx-20">
            <div className="container px-5 mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                    <div className="flex flex-col space-y-6">
                        <p className="text-[#00ff66] text-sm font-medium">Categories</p>
                        <h2 className="text-3xl md:text-5xl font-medium">Enhance Your Music Experience</h2>
                        <div className="flex space-x-4 my-6">
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-black rounded-full w-16 h-16 flex flex-col items-center justify-center">
                                    <span className="font-bold text-xl">{formatTime(timeLeft.days)}</span>
                                    <span className="text-xs">Days</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center flex-col">
                                    <span className="font-bold text-xl">{formatTime(timeLeft.hours)}</span>
                                    <span className="text-xs">Hours</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center flex-col">
                                    <span className="font-bold text-xl">{formatTime(timeLeft.minutes)}</span>
                                    <span className="text-xs">Minutes</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center flex-col">
                                    <span className="font-bold text-xl">{formatTime(timeLeft.seconds)}</span>
                                    <span className="text-xs">Seconds</span>
                                </div>
                            </div>
                        </div>
                        <Link to={'/products'} className="bg-[#00ff66] text-white px-10 py-3 rounded-sm w-fit hover:bg-[#00cc55] transition-colors">
                            Buy Now!
                        </Link>
                    </div>
                </div>


                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md">
                        <img
                            src="/sound.png"
                            alt="Music Experience"
                            width={500}
                            height={500}
                            className="object-contain drop-shadow-lg transform scale-x-[-1.5] scale-150"
                            style={{ filter: 'drop-shadow(rgba(255, 255, 255, 0.4) 10px -10px 60px)' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}