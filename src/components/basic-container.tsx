import React from "react";

interface BasicContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function BasicContainer({
  children,
  className = "",
}: BasicContainerProps) {
  return (
    <div className="flex flex-col bg-neutral-100 bg-opacity-0 rounded-2xl p-5">
      {children}
    </div>
  );
}
