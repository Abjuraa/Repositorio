import { useEffect, useRef } from "react";
import TypeIt from "typeit";

export default function Typewriter() {
    const textRef = useRef(null);

    useEffect(() => {
        if (!textRef.current) return;

        const instance = new TypeIt(textRef.current, {
            speed: 100,
            loop: true,
            waitUntilVisible: true,
            lifeLike: true,
        })
            .type("Prueba")
            .pause(1500)
            .delete()
            .go();

        return () => {
            instance.destroy(true);
        };
    }, []);

    return (
        <span ref={textRef} className=""></span>
    );
}
