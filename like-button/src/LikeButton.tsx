import { useState } from 'react';
import './like-button.css';

export function LikeButton() {
    const [count, setCount] = useState(999);
    const handleClick = () => { setCount(count + 1); };

    return (
        <button className="like" type="button" onClick={handleClick}>
            {count}
        </button>
    );
}