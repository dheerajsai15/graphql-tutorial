import { ListingAPI } from "./data-sources/listing-api"

export type DataSourceContext = {
    dataSources: {
        listingAPI: ListingAPI
    }
}