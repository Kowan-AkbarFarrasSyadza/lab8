import { Navbar } from "@/components/navbar";
import SquareAreaForm from "@/components/square-area-form";

export default function SquareArea() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <SquareAreaForm />
      </main>
    </>
  );
}
