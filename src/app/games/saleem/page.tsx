"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/games/leem/leem1.png",
  "/games/leem/leem2.png",
  "/games/leem/leem3.png",
  "/games/leem/leem3.png",
  "/games/leem/leem4.png",
  "/games/leem/leem5.png",
  "/games/leem/leem6.png",
];
const sounds = [
  "/games/leem/unplug_your_ears.m4a",
  "/games/leem/join_me_on_teams.m4a",
  "/games/leem/alright_heres_the_question.m4a",
  "/games/leem/tom!.m4a",
  "/games/leem/okay!.m4a",
];


const MrSaleem: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  const handleImageClick = () => {
    // Choose a random sound and play it
    const randomSound = new Audio(randomItem(sounds));
    randomSound.play();

    // Swap to a new random image
    setCurrentImage(randomItem(images));
  };

  const randomItem = (arr: string[]): string => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const playAudio = (id: number) => {
    const audioSource = sounds[id];
    const sound = new Audio(audioSource);
    console.log(audioSource);
    sound.play();
  };

  return (
    <div className="m-10 text-center">
      <div className="text-2xl font-bold mb-4">Hello I'm Mr. Saleem!</div>
      <Image
        src={currentImage}
        alt="Mr. Saleem"
        onClick={handleImageClick}
        className="cursor-pointer mx-auto w-64 h-auto transition-transform duration-200 hover:scale-105"
        width={256}
        height={256}
      />

      <div className="mt-8 space-x-4 mb-15">
        {[
          "Unplug your ears!",
          "Join me on Teams!",
          "Alright, here's the question...",
          "Tom", 
          "OK!"
        ].map((label, audio_id) => (
          <button
            key={audio_id}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-xl shadow-lg mb-4"
            onClick={() => playAudio(audio_id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div style={{ height: "400px" }}></div>
    </div>
  );
};

export default MrSaleem;
