import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadingComponent from "../components/HeadingComponent";
import { TestChart } from "../components/TestChart";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeadingComponent />
      <TestChart />
      <Footer />
    </>
  );
}
