import Image from "next/image";

export default function ImageCard({ item }) {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="h-80 flex items-center justify-center bg-white">
        <div className="h-[70%] w-[80%] m-auto relative ">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="text-xs flex flex-col gap-1 ">
        <p className="flex-grow">{item.title}</p>
        <p className="flex-grow-0">Rs.{item.price}</p>
      </div>
    </div>
  );
}
