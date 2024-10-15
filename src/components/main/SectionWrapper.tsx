import React from "react";

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col justify-center items-center flex-nowrap gap-14 lg:flex-row p-10 lg:p-32 max-w-7xl mx-auto">
      {children}
    </section>
  );
}
