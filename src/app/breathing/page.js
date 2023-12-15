import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BubbleBreathing from "../components/Bubble";
import HeadingComponent from "../components/HeadingComponent";

export default function page() {
  return (
    <>
      <Navbar />
      <HeadingComponent />
      <BubbleBreathing />
      <Footer />
    </>
  );
}
