import { useEffect } from "react";

export type Workshop = "printing" | "fabnex";

export const useWorkshopMemory = (currentWorkshop: Workshop) => {
  useEffect(() => {
    // Store current workshop for analytics or future features
    localStorage.setItem("kalpatru_current_workshop", currentWorkshop);
  }, [currentWorkshop]);
};
