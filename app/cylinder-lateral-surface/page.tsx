import { Navbar } from "@/components/navbar";
import CylinderLateralSurfaceForm from "@/components/cylinder-lateral-surface-form";

export default function CylinderLateralSurface() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <CylinderLateralSurfaceForm />
      </main>
    </>
  );
}
