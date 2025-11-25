import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ui/ClientOnly";
import EmptyState from "@/app/components/ui/EmptyState";
import ListingClient from "@/app/components/listings/details/ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: Promise<IParams> }) => {
  
  const resolvedParams = await params;

  const listing = await getListingById(resolvedParams);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient listing={listing} />
    </ClientOnly>
  );
}

export default ListingPage;