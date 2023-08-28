"use client";
import { NextResponse } from "next/server";

export default function Apex() {
  const apiKey: string = process.env.APEX_API_KEY;
  async function getData(username: string) {
    try {
      let platform: string = "origin";
      const res = await fetch(
        // `https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${username}`,
        `https://public-api.tracker.gg/v2/apex/standard/profile/psn/Daltoosh`,
        {
          headers: {
            "Content-Type": "application/json",
            "API-Key": apiKey,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Network response was not okay");
      }
      const data = await res.json();
      console.log(data);
      return NextResponse.json({ data });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <>
      <>enter username here</>
      <input type="text" className="border"></input>
      <button onClick={() => getData("Hippys")}>Submit</button>
    </>
  );
}
