import { FaqData } from "./Faq.consts";
import Accordion from "react-bootstrap/Accordion";
import styles from "./Faq.module.scss";

const Faq = () => (
  <div className="p-5">
    {FaqData.map(({ answer, number, question, href, link }) => (
      <Accordion key={number}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div
              className={`d-flex align-items-center justify-content-center w-25`}
            >
              <div className={`d-flex ${styles.numbersBox}`}>
                <p className="w-100 d-flex justify-content-center align-items-center m-0 p-0">
                  {number}
                </p>
              </div>
            </div>
            <div className={`w-75 m-2 ${styles.questionBox}`}>
              <p>{question}</p>
            </div>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            {answer.split("\n").map((line) => (
              <p key={line}>{line}</p>
            ))}
            {number === "6" || "12" ? (
              <div>
                {link?.split("\n").map((line, index) => (
                  <ul key={line}>
                    <a
                      href={href[index]}
                      key={index}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {line}
                    </a>
                  </ul>
                ))}
              </div>
            ) : null}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ))}
  </div>
);

export default Faq;
