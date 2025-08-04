"use client";

import React, { useState } from "react";

const images = [
  "leem1.png", 
  "leem2.png", 
  "leem3.png", 
  "leem3.png", 
  "leem4.png", 
  "leem5.png", 
  "leem6.png", 
];
const sounds = ["unplug_your_ears.m4a", "join_me_on_teams.m4a", "alright_heres_the_question.m4a"];

const bucketURL = process.env.MEDIA_BUCKET

const MrSaleem: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  const handleImageClick = () => {
    // Choose a random sound and play it
    const randomSound = new Audio(`${bucketURL}/${randomItem(sounds)}`);
    randomSound.play();

    // Swap to a new random image
    setCurrentImage(randomItem(images));
  };

  const randomItem = (arr: string[]): string => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const playAudio = (id: number) => {
    const sound = new Audio(`${bucketURL}/${sounds[id]}`);
    sound.play();
  }

  return (
    <div className="m-10 text-center">
      <div className="text-2xl font-bold mb-4">Hello I'm Mr. Saleem!</div>
      <img
        src={`${bucketURL}/${currentImage}`}
        alt="Mr. Saleem"
        onClick={handleImageClick}
        className="cursor-pointer mx-auto w-64 h-auto transition-transform duration-200 hover:scale-105"
      />

      <div className="mt-8 space-x-4">
        {/* "Fire up Teams", "Yes!", "Okay!" */}
        {["Unplug your ears!", "Join me on Teams!", "Alright, here's the question..."].map((label, audio_id) => (
          <button
            key={audio_id}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-xl shadow-lg"
            onClick={() => playAudio(audio_id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MrSaleem;
