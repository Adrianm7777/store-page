import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import styles from "./Localisation.module.scss";
import { useGetCitiesDataQuery } from "../../../../Redux/Services/CitiesApi/citiesApi";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import LocalisationButton from "./LocalisationButton";

const Localisation = () => {
  const [value, setValue] = useState("");

  const { data: getCitiesData } = useGetCitiesDataQuery({
    country: "PL",
    min_population: "50000",
    limit: "20",
  });

  return (
    <Container
      fluid
      className={`d-flex flex-column align-items-center justify-content-between gap-4 p-5 g-0 text-center ${styles.localistionContainer}`}
    >
      <h2>Sprawdź, kto z naszych partnerów dowozi w Twoim mieście:</h2>
      <DropdownButton
        data-bs-theme="light"
        title="Wyszukaj"
        variant="secondary"
        drop="down-centered"
      >
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        {getCitiesData
          ?.filter(({ name }) => !value || name?.startsWith(value))
          .map(({ name, population }) => (
            <Dropdown.Item key={population}>{name}</Dropdown.Item>
          ))}
      </DropdownButton>
      <h2>Możesz też podać swoją lokalizację na mapie:</h2>
      <LocalisationButton />
    </Container>
  );
};

export default Localisation;
