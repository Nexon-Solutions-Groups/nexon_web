export function ProductShot({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-line bg-black shadow-[0_24px_80px_rgba(0,0,0,0.18)] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="aspect-video w-full object-cover object-center" />
    </div>
  );
}
