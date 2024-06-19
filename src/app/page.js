// import Image from "next/image";
// import Header from "./Components/Header";
import Navbar from "./Components/Header";
import SignForm from "./Components/Signin";

export default function Home() {
  return (
    <main >

      <Navbar />

      <div className="flex justify-center py-10">
        <SignForm />
      </div>
      
    </main>
  );
}
