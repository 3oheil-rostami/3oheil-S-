import { useRef, useState, useEffect } from "react";
// import {songs} from '../../../../../../../.././js/mus/soheil.mp3'

function MusicPlayer() {
    
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [bars, setBars] = useState(new Array(20).fill(5));
    const [folder, setFolder] = useState('')

    const songs = [
        { title: "Song 1", src : folder},
        { title: "Song 2", src: "https://jelvehmusic.musicmelllnet.com/jsv/1/Amir%20Tataloo%20-%20Rafttanet.mp3" },
    ];
    // پخش/توقف
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    useEffect(() => {
        setFolder(() => prompt('Enter your link'))
    }, [])
    console.log(folder)
    // رقص نور
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setBars(bars.map(() => Math.floor(Math.random() * 50) + 5));
            }, 200);
        } else {
            setBars(new Array(20).fill(8));
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-2xl shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">My Music Player</h2>

            {/* دکمه پخش/توقف */}
            <button
                onClick={togglePlay}
                className={isPlaying ? 'btn-music bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-xl text-2xl mb-6 ' : '"bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-xl text-2xl mb-6 '}

                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto',


                }}
            >
                {isPlaying ? "⏸" : "▶"}
            </button>

            {/* رقص نور خوشگل‌تر */}
            <div className="gap-1 h-50" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {bars.map((h, i) => (
                    <div
                        key={i}
                        style={{
                            height: `${h}px`,
                            marginTop: '15px',
                            //   maxHeight:'100%',
                            width: "6px",
                            borderRadius: "3px",
                            transition: "height 0.5s ease",
                            background: "linear-gradient(to top, #ff6a00, #ffcc70)", // نارنجی به زرد

                        }}
                    ></div>
                ))}
            </div>

            {/* موزیک */}
            <audio ref={audioRef} src={songs[0].src}></audio>
        </div>
    );
}

export default MusicPlayer;
