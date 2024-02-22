import { Container } from "react-bootstrap";
import ShowMoreButton from "../../../../Reusable/YellowButton/ShowMoreButton";
import styles from "./ButtonsArray.module.scss";
import { useEffect, useRef } from "react";
import { TextButtonArray } from "./TextButtonArray.const";

const ButtonsArray = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 100) {
        containerRef.current?.classList.add(styles.scrolled);
      } else {
        containerRef.current?.classList.remove(styles.scrolled);
      }
    };
    window.addEventListener("scroll", handleScrolled);

    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container className="d-flex gap-2" ref={containerRef}>
      {TextButtonArray.map(({ text, sectionId }) => (
        <ShowMoreButton
          key={text}
          btnText={text}
          className={styles.arrayButton}
          onClick={() => scrollToSection(sectionId)}
        />
      ))}
    </Container>
  );
};

export default ButtonsArray;
