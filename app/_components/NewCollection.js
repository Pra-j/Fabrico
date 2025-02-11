import { Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function NewCollection() {
  return (
    <div className="">
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(4, 1fr)"
        className="text-black h-[36rem] gap-x-6 gap-y-2"
      >
        <GridItem colSpan={2} rowSpan={4} className="relative h-full bg-black">
          <Image
            src="/new-item-1.png"
            fill
            className="object-cover "
            alt="new product"
          />
        </GridItem>

        <GridItem colSpan={3} rowSpan={1}>
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-heading uppercase">
              <span className="block">New</span> Collections
            </h1>
            <Link
              href="/products"
              className="self-start mt-3 flex items-center justify-center gap-2"
            >
              See More <span className="text-4xl mb-1"> &rarr;</span>
            </Link>
          </div>
        </GridItem>

        <GridItem colSpan={1} rowSpan={1}></GridItem>

        <GridItem
          colSpan={1}
          rowSpan={2}
          className="relative bg-black"
          style={{ gridRow: "3 / span 2", gridColumn: "3/4" }}
        >
          <Image
            src="/new-item-2.png"
            fill
            className="object-cover"
            alt="new product"
          />
        </GridItem>
        <GridItem colSpan={2} rowSpan={3} className="ml-10">
          This elegant black oversized hoodie from Gucci combines luxury with
          comfort. Made from premium materials, it features the iconic Gucci
          logo, adding a touch of sophistication to the casual design. The
          relaxed fit and soft fabric provide a cozy, effortless style, while
          the minimalist black color ensures versatility in any wardrobe.
          Perfect for elevating a laid-back look, this hoodie offers both warmth
          and timeless fashion, making it a must-have for those who appreciate
          high-end, contemporary streetwear.
        </GridItem>
      </Grid>
    </div>
  );
}
