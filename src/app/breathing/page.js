import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BubbleBreathing from "../components/Bubble";
import HeadingComponent from "../components/HeadingComponent";
import VideoPlayer from "../components/VideoPlayer";

export default function page() {
  return (
    <>
      <Navbar />
      <HeadingComponent />
      <VideoPlayer />
      <BubbleBreathing />
      <Footer />
    </>
  );
}
