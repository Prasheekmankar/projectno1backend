import { client } from "./index.js";


export async function getBike(data) {
    return await client
      .db("bike_data")
      .collection("bikelist")
      .find(data)
      .toArray();
  }