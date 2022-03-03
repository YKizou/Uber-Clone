import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickuplocation, dropofflocation } = router.query;
  const [pickupCoordinate, setPickupCoordinate] = useState([
    -77.052256, 38.924735,
  ]);
  const [dropoffCoordinate, setDropoffCoordinate] = useState([
    -77.1703, 38.8407,
  ]);

  const getPickupCoordinate = (pickuplocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickuplocation}.json?` +
        new URLSearchParams({
          access_token: "YOUR_ACCESS_TOKEN",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinate(data.features[0].center);
      });
  };

  const getDropoffCoordinate = (dropofflocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropofflocation}.json?` +
        new URLSearchParams({
          access_token: "YOUR_ACCESS_TOKEN",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinate(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinate(pickuplocation);
    getDropoffCoordinate(dropofflocation);
  }, [pickuplocation, dropofflocation]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>

      <Map
        pickupCoordinate={pickupCoordinate}
        dropoffCoordinate={dropoffCoordinate}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinate={pickupCoordinate}
          dropoffCoordinate={dropoffCoordinate}
        />
        <ConfirmButtonContainer>Confirm</ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
 flex flex-col h-screen 
`;

const RideContainer = tw.div`
flex-1  h-1/2 overflow-y-scroll flex flex-col
`;

const ConfirmButtonContainer = tw.div`
bg-black flex text-xl  items-center py-4 text-white mt-4 justify-center text-center m-4 transform hover:scale-105 transition cursor-pointer

`;
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const BackButton = tw.img`
h-full object-contain   
`;

export default Confirm;
