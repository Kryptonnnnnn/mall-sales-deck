import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const ScrollVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = () => {
      if (video.duration) {
        video.currentTime = video.duration * scrollYProgress.get();
      }
    };

    scrollYProgress.on("change", update);
  }, [scrollYProgress]);

  return (
    <section className="h-[200vh]">
      <div className="sticky top-0 h-screen">
        <video
          ref={videoRef}
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" />
        </video>
      </div>
    </section>
  );
};

export default ScrollVideo;