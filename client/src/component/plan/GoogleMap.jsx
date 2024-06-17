import { useEffect, useRef, useState } from "react";

function GoogleMap({ latitude, longitude }) {
  const ref = useRef(null);
  const [googleMap, setGoogleMap] = useState();

  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: {
          lat: latitude ? latitude : 37.5,
          lng: longitude ? longitude : 127.0,
        },
        zoom: 16,
      });

      setGoogleMap(initialMap);

      // Marker 추가
      new window.google.maps.Marker({
        position: {
          lat: latitude ? latitude : 37.5,
          lng: longitude ? longitude : 127.0,
        },
        map: initialMap,
      });
    }
  }, [latitude, longitude]);

  return <div ref={ref} id="map" className="w-full h-full" />;
}

export default GoogleMap;
