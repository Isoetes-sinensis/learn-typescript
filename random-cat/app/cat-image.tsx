'use client'

import { useState } from "react";
import { fetchImage } from "./fetch-image";

type CatImageProps = {
    url: string
}

export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);
    const refreshImage = async () => {
        setImageUrl(''); // Leave the picture black while loading.
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return (
        <div>
            <button onClick={refreshImage}>Click to change!</button>
            {imageUrl && <img src={imageUrl} />}
        </div>
    );
}