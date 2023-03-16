import React from "react";
import FAQmobile from "@/components/FAQmobile";
import FAQdesktop from "@/components/FAQdesktop";
import mediaSelector from "@/hoc/mediaSelector";

export default function FaqPage() {
  const RenderQuery = mediaSelector(FAQmobile, FAQdesktop);

  return (
    <>
      <RenderQuery />
    </>
  );
}
