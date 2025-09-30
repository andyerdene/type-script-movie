"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Movies } from "./_components/Movies";
import { MovieType } from "@/lib/types";

export default function Home() {
  const [number, setNumber] = useState<number>(0);
  const [numOrStr, setNumOrStr] = useState<number | string>("");
  const [grades, setGrades] = useState<number[]>([]);

  const [movies, setMovies] = useState<MovieType[]>();

  const movie: MovieType = {
    name: "Avatar",
    release: 2025,
    rating: 7.8,
    images: ["https://www.google.com", "https://www.facebook.com"],
  };
  const testMovies: MovieType[] = [
    {
      name: "Avatar",
      release: 2025,
      rating: 7.8,
      images: ["https://www.google.com", "https://www.facebook.com"],
    },
    {
      name: "Muana",
      release: 2025,
      rating: 7.8,
      images: ["https://www.google.com", "https://www.facebook.com"],
    },
  ];

  const incrementHandler = () => {
    setNumber(number + 1);
  };
  return (
    <div className="p-10 flex gap-2">
      <Card className="w-fit">
        <CardContent className="flex flex-col gap-4 w-fit">
          {number}
          <Button className="w-fit" onClick={incrementHandler}>
            Increment
          </Button>
        </CardContent>
      </Card>
      <Card className="w-fit">
        <CardContent className="flex flex-col gap-4 w-fit">
          {numOrStr}
          <Button className="w-fit" onClick={() => setNumOrStr(100)}>
            Change Into Number
          </Button>
          <Button className="w-fit" onClick={() => setNumOrStr("Hello")}>
            Change Into String
          </Button>
        </CardContent>
      </Card>
      <Movies movies={testMovies} />
    </div>
  );
}
