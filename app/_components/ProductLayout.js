import { Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import ImageCard from "./ImageCard";

export default function ProductLayout({ heading, data }) {
  return (
    <div className="text-black my-20 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-heading uppercase">{heading}</h1>
        <Link
          href="/products"
          className="self-start mt-3 flex items-center justify-center gap-2"
        >
          See More <span className="text-4xl mb-1"> &rarr;</span>
        </Link>{" "}
      </div>
      <Grid templateColumns="repeat(4, 1fr)" gap="6">
        {data.slice(0, 4).map((item) => (
          <GridItem key={item.id}>
            <ImageCard item={item} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}
