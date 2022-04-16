import React, { useRef, useEffect, createRef } from "react";
import "./App.css";
import Video from "./components/Video";

function App() {

  const refs = [];
  const wrapRef = useRef();

  const newRef = () => {
    const ref = createRef();
    refs.push(ref);
    return ref;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("red");
            entry.target.classList.remove("bisque");
          } else {
            entry.target.classList.add("bisque");
            entry.target.classList.remove("red");
          }
        }
      },
      {
        threshold: 1,
        // root: wrapRef.current,
        // rootMargin: "-20px 0px -40px 0px"
      }
    );
    refs.forEach((ref) =>
      observer.observe(ref.current)
    );

    return () => {
      refs.forEach((ref) => ref.current && observer.unobserve(ref.current));
    };
  }, []);

  return (
    <div className="app">
      <div className="wrap" ref={wrapRef}>
        {Array(20).fill("_").map(() => <div ref={newRef()} className="item">

        </div>)}
      </div>
      <video src="https://res.cloudinary.com/dntsyzdh3/video/upload/v1649771922/Tiktok/videos/v4_etrtme.mp4"
        autoPlay
        muted
        height={400}
        controls
        loop
      ></video>
    </div >
  );
}

export default App;
