import { Card, CardContent } from "@/components/ui/card";
import { MovieType } from "@/lib/types";

export const MovieCard = (props: { movie: MovieType }) => {
  const { movie } = props;

  return (
    <Card>
      <CardContent>{movie.name}</CardContent>
    </Card>
  );
};
