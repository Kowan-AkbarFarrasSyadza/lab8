import { Navbar } from "@/components/navbar";
import CubeSurfaceForm from "@/components/cube-surface-form";

export default function CubeSurface() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <CubeSurfaceForm />
      </main>
    </>
  );
}
