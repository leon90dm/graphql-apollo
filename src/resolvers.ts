import { Resolvers } from "./types";


export const resolvers : Resolvers= {
Query: {
    featuredPlaylists: (_: any, __: any, { dataSources }: any) => {
      console.log(dataSources)
      return dataSources.spotifyAPI.getFeaturedPlaylists();
    },
  }
}