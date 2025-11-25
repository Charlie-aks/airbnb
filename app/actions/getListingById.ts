import { rooms } from "@/app/data/rooms";

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    if (!params) {
      return null;
    }
    const { listingId } = params;

    if (!listingId) {
      return null;
    }

    const listing = rooms.find((room) => room.id === listingId);

    if (!listing) {
      return null;
    }

    return listing;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
}