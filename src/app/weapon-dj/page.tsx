'use client'

import React, { useState, useRef, useEffect } from 'react'

interface Song {
    name: string;
    url: string;
}

const songs: Song[] = [
    {
        name: "Forever",
        url: "/weapon_dj/forever.mp4"
    },
    {
        name: "Fein",
        url: "/weapon_dj/fein.mp4"
    },
    {
        name: "Hills",
        url: "/weapon_dj/hills.mp4"
    },
]

const WeaponDJ = () => {
    const [currentSong, setCurrentSong] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playSong = (songUrl: string) => {
        // Stop any currently playing song
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        // Play the new song
        const audio = new Audio(songUrl);
        audioRef.current = audio;
        audio.play();
        setCurrentSong(songUrl);

        // Clean up when song finishes
        audio.addEventListener('ended', () => {
            setCurrentSong(null);
            audioRef.current = null;
        });
    };

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return (
        <div className="fixed bottom-4 left-4 z-50">
            {/* Toggle button that's always visible */}
            <button
                onClick={() => setIsVisible(!isVisible)}
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform flex items-center justify-center border-2 border-white/20"
                title={isVisible ? "Hide Weapon DJ" : "Show Weapon DJ"}
            >
                <span className="text-white text-sm font-bold">
                    {isVisible ? '−' : '+'}
                </span>
            </button>

            {/* Main component */}
            {isVisible && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-2xl p-3 border-2 border-white/20">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-bold text-xs mb-1 text-center">
                            🔥 WEAPON DJ 🔥
                        </h3>
                        <div className="flex gap-2">
                            {songs.map((song) => (
                                <button
                                    key={song.url}
                                    onClick={() => playSong(song.url)}
                                    disabled={currentSong === song.url}
                                    className={`
                                        px-4 py-2 rounded-md font-semibold text-sm
                                        transition-all duration-200
                                        ${currentSong === song.url
                                            ? 'bg-white/30 text-white/60 cursor-not-allowed'
                                            : 'bg-white text-purple-700 hover:bg-purple-100 hover:scale-105 active:scale-95'
                                        }
                                        shadow-lg
                                    `}
                                >
                                    {song.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeaponDJ
