/** NOT USED */

import { Video } from "../primitives";

export default function HeroVideoBackground() {
  return (
    <div
      className="absolute inset-0 -z-20"
      style={{
        opacity: 1,
        transform: "none",
      }}
    >
      <div className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]">
        <Video src="/assets/videos/hero-video.mp4" />
        <div className="absolute -inset-px bg-tea-600/50"></div>
        <div className="bg-gradient-to-b absolute -inset-px from-transparent via-transparent to-tea-600"></div>
        <div className="bg-gradient-to-l absolute -inset-px hidden from-transparent via-transparent to-tea-600 lg:block"></div>
      </div>
    </div>
  );
}
