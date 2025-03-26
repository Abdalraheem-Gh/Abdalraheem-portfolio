import Image from "next/image";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?:boolean;

}

export default function LazyImage({ src, alt, width, height  }: LazyImageProps) {
  return (
    <div className="relative w-full h-auto">
      <Image src={src} alt={alt} width={width} height={height} loading="lazy" className="rounded-lg" />
    </div>
  );
}
