"use client"

import { useState } from "react";

export default function Card({ url, top, body }: any) {

  return (
    <div className="rounded-xl w-64 h-96 flex items-center relative overflow-hidden">
      <div className={`absolute w-full h-8 blur-sm top-3.5 backdrop-blur rounded-xl ${top ? "hidden" : "block"}`}>
      </div>
      <img 
        src={url} 
        alt="magic card" 
        className="w-auto h-auto rounded-xl"
        />
      <div className={`absolute w-full h-40 blur-sm bottom-3.5 backdrop-blur rounded-xl ${body ? "hidden" : "block"}`}>
      </div>
    </div>
  );

}
