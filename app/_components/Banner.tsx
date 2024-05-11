import * as React from "react";

export default function Banner() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 pt-5">
      <h2>
        <span className="text-9xl font-bold">&lsaquo;MmB/&rsaquo;</span>{" "}
      </h2>
      <p className="text-3xl">
        Le blog de contenu pour les devs francophones !
      </p>
      <hr className="w-5/6 h-1" />
    </section>
  );
}
