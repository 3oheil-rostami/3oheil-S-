import { useEffect, useRef } from "react";
import "@neshan-maps-platform/react-openlayers/dist/style.css";

import /* NeshanMap, */ {
  NeshanMapRef,
} from "@neshan-maps-platform/react-openlayers";

const Map = () => {
  const mapRef = useRef<NeshanMapRef | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mapRef.current?.map) {
        mapRef.current?.map.setMapType("standard-night");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p>neshan map Component</p>
    // <NeshanMap
    //   ref={mapRef}
    //   mapKey={process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE}
    //   traffic={false}
    //   center={{ latitude: 35.7665394, longitude: 51.4749824 }}
    //   defaultType="dreamy"
    //   style={{ height: "100%", width: "100%" }}
    // >
    // </NeshanMap>
  );
};

export default Map;
