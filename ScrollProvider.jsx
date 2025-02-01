import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const HomeRef = useRef(null);
  const servicesRef = useRef(null);
  const PortfolioRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth"});
  };

  return (
    <ScrollContext.Provider value={{ servicesRef, scrollToSection, PortfolioRef, AboutRef ,ContactRef, HomeRef}}>
      {children}
    </ScrollContext.Provider>
  );
};
