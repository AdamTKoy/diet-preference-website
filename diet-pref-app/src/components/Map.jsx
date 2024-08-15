// Google Documentation: https://developers.google.com/maps/documentation/javascript/examples
// Source: https://www.youtube.com/watch?v=PfZ4oLftItk&list=PL2rFahu9sLJ2QuJaKKYDaJp0YqjFCDCtN

import { useState } from 'react';
import { 
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
 } from '@vis.gl/react-google-maps';

export default function FoodMap() {
  const champaign = { lat: 40.11019, lng: -88.227189 };
  const potbelly = { lat: 40.110131, lng: -88.23187 };
  const houlihans = { lat: 40.093834, lng: -88.237828 };
  const subway = { lat: 40.110458, lng: -88.229665 };
  const mcdonalds = { lat: 40.110397, lng: -88.229845 };
  const jimmy_johns = { lat: 40.110182, lng: -88.230188 };
  const pizza_hut = { lat: 40.120199, lng: -88.277187 };
  const panaera_bread = { lat: 40.097823, lng: -88.275385 };
  const dominos = { lat: 40.115835, lng: -88.202954 };

  const [openP, setOpenP] = useState(false);
  const [openH, setOpenH] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [openM, setOpenM] = useState(false);
  const [openJJ, setOpenJJ] = useState(false);
  const [openPH, setOpenPH] = useState(false);
  const [openPB, setOpenPB] = useState(false);
  const [openD, setOpenD] = useState(false);

  return (
    <APIProvider apiKey='AIzaSyCyK_rZxTJT0llQyijki3mKiNGfgxp-_wQ'>
      <div style={{ height: "50vh", width: "100%" }}>
        <Map zoom={14} center={champaign} mapId={'foodmap'}>
          <AdvancedMarker position={potbelly} onClick={() => setOpenP(true)}>
            <Pin background={"blue"} />
          </AdvancedMarker>

          <AdvancedMarker position={houlihans} onClick={() => setOpenH(true)}>
            <Pin background={"red"} />
          </AdvancedMarker>

          <AdvancedMarker position={subway} onClick={() => setOpenS(true)}>
            <Pin background={"white"} />
          </AdvancedMarker>

          <AdvancedMarker position={mcdonalds} onClick={() => setOpenM(true)}>
            <Pin background={"yellow"} />
          </AdvancedMarker>

          <AdvancedMarker position={jimmy_johns} onClick={() => setOpenJJ(true)}>
            <Pin background={"beige"} />
          </AdvancedMarker>

          <AdvancedMarker position={pizza_hut} onClick={() => setOpenPH(true)}>
            <Pin background={"purple"} />
          </AdvancedMarker>

          <AdvancedMarker position={panaera_bread} onClick={() => setOpenPB(true)}>
            <Pin background={"pink"} />
          </AdvancedMarker>

          <AdvancedMarker position={dominos} onClick={() => setOpenD(true)}>
            <Pin background={"brown"} />
          </AdvancedMarker>

          { openP && (
            <InfoWindow position={potbelly} onCloseClick={() => setOpenP(false)}>
              <h4>Potbelly</h4>
            </InfoWindow>
          )}

          { openH && (
            <InfoWindow position={houlihans} onCloseClick={() => setOpenH(false)}>
              <h4>Houlihan's</h4>
            </InfoWindow>
          )}

          { openS && (
            <InfoWindow position={subway} onCloseClick={() => setOpenS(false)}>
              <h4>Subway</h4>
            </InfoWindow>
          )}

          { openM && (
            <InfoWindow position={mcdonalds} onCloseClick={() => setOpenM(false)}>
              <h4>McDonald's</h4>
            </InfoWindow>
          )}

          { openJJ && (
            <InfoWindow position={jimmy_johns} onCloseClick={() => setOpenJJ(false)}>
              <h4>Jimmy John's</h4>
            </InfoWindow>
          )}

          { openPH && (
            <InfoWindow position={pizza_hut} onCloseClick={() => setOpenPH(false)}>
              <h4>Pizza Hut</h4>
            </InfoWindow>
          )}

          { openPB && (
            <InfoWindow position={panaera_bread} onCloseClick={() => setOpenPB(false)}>
              <h4>Panera Bread</h4>
            </InfoWindow>
          )}

          { openD && (
            <InfoWindow position={dominos} onCloseClick={() => setOpenD(false)}>
              <h4>Domino's</h4>
            </InfoWindow>
          )}

        </Map>
      </div>
    </APIProvider>
  );
}

/*
async function InitMap() {
  const champaign = { lat: 40.11019, lng: -88.227189 };
  const potbelly = { lat: 40.110131, lng: -88.23187 };
  const houlihans = { lat: 40.093834, lng: -88.237828 };
  const subway = { lat: 40.110458, lng: -88.229665 };
  const mcdonalds = { lat: 40.110397, lng: -88.229845 };
  const jimmy_johns = { lat: 40.110182, lng: -88.230188 };
  const pizza_hut = { lat: 40.120199, lng: -88.277187 };
  const panaera_bread = { lat: 40.097823, lng: -88.275385 };
  const dominos = { lat: 40.115835, lng: -88.202954 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: champaign,
  });

  new google.maps.Marker({
    position: potbelly,
    map,
    title: "Potbelly",
  });

  new google.maps.Marker({
    position: subway,
    map,
    title: "Subway",
  });

  new google.maps.Marker({
    position: mcdonalds,
    map,
    title: "Mcdonalds",
  });

  new google.maps.Marker({
    position: jimmy_johns,
    map,
    title: "Jimmy John's",
  });

  new google.maps.Marker({
    position: pizza_hut,
    map,
    title: "Pizza Hut",
  });

  new google.maps.Marker({
    position: panaera_bread,
    map,
    title: "Panaera Bread",
  });

  new google.maps.Marker({
    position: dominos,
    map,
    title: "Domino's",
  });

  new google.maps.Marker({
    position: houlihans,
    map,
    title: "Houlihan's",
  });
}

// window.initMap = initMap;
// initMap();
export default InitMap;

*/