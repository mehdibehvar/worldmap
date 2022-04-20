import React from "react";
import Loader  from "../../assets/image/_21_loading-gif-transparent-background_All-Loading-Gif-Image-Transparent-Background-Best-Studio-.gif"
export default function Loading() {
    return <div className="text-center">
        <img className="mb-6" src={Loader} alt="loading......" />
    </div>
}