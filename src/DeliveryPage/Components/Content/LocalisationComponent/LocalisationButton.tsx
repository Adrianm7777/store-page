import { Button } from "react-bootstrap";

const LocalisationButton = () => {
  const handelLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolokalizacja nie jest obsługiwana przez tę przeglądarkę.");
    }
  };

  const showPosition = (position: GeolocationPosition) => {
    console.log(
      "Szerokość geograficzna: " +
        position.coords.latitude +
        ", Długość geograficzna: " +
        position.coords.longitude
    );
  };

  const showError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Użytkownik odmówił prośby o Geolokalizację.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Informacje o lokalizacji są niedostępne.");
        break;
      case error.TIMEOUT:
        alert("Upłynął czas oczekiwania na żądanie lokalizacji.");
        break;
    }
  };
  return (
    <Button variant="success" onClick={handelLocation}>
      ZLOKALIZUJ
    </Button>
  );
};

export default LocalisationButton;
