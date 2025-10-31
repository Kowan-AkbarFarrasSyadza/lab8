import { Navbar } from "@/components/navbar";
import CircleAreaForm from "@/components/circle-area-form";

export default function CircleArea() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <CircleAreaForm />
      </main>
    </>
  );
}
