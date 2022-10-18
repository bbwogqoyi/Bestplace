enum ListingStatus {
  Draft,
  New,
  OfferPending,
  Sold,
  Cancelled
}

function getStatusDescription(value: ListingStatus) {
  switch(value) {
    case ListingStatus.Draft: return 'Draft';
    case ListingStatus.New: return 'New';
    case ListingStatus.OfferPending: return 'Offer Pending';
    case ListingStatus.Sold: return 'Sold';
    case ListingStatus.Cancelled: return 'Cancelled';
  }
}

export default {
  statusOptions: ListingStatus,
  getStatusDescription
}