'use client';

import { Room } from "@/app/data/rooms";
import { useMemo } from "react";
import Container from "../../ui/Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";
import ListingReservation from "./ListingReservation";

interface ListingClientProps {
  listing: Room;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing
}) => {
  
  const totalPrice = useMemo(() => {
      return listing.price * 5; 
  }, [listing.price]);

  return ( 
    <Container>
      <div className="max-w-5xl mx-auto pt-28 pb-20"> 
        <div className="flex flex-col gap-6"> 
          <ListingHead
            title={listing.name}
            images={listing.images}
            locationValue={listing.location}
            id={listing.id}
          />
          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-7 
            md:gap-10 
            mt-6
          ">
            <ListingInfo
              room={listing}
            />
            <div className="
              order-first 
              mb-10 
              md:order-last 
              md:col-span-3
            ">
              <div className="sticky top-28"> 
                  <ListingReservation
                    price={listing.price}
                    totalPrice={totalPrice}
                    onChangeDate={() => {}}
                    dateRange={{startDate: new Date(), endDate: new Date(), key: 'selection'}}
                    onSubmit={() => {}}
                    disabled={false}
                    disabledDates={[]}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
   );
}
 
export default ListingClient;