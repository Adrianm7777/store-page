import { FaqData } from "./Faq.consts";
import Accordion from "react-bootstrap/Accordion";
import styles from "./Faq.module.scss";

const Faq = () => (
  <div className="p-5">
    {FaqData.map((data) => (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div
              className={`d-flex align-items-center justify-content-center w-25`}
            >
              <div className={`d-flex ${styles.numbersBox}`}>
                <p className="w-100 d-flex justify-content-center align-items-center m-0 p-0">
                  {data.number}
                </p>
              </div>
            </div>
            <div className={`w-75 m-2 ${styles.questionBox}`}>
              <p>{data.question}</p>
            </div>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            {data.answer.split("\n").map((line) => (
              <p>{line}</p>
            ))}
            {data.number === "6" || "12" ? (
              <div>
                {data.link?.split("\n").map((line, index) => (
                  <ul>
                    <a href={data.href[index]} key={index}>
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
