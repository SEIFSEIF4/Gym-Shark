import { cn } from "@/lib/utils";

type VideoComponentProps = {
  src: string;
  title: string;
  className?: string;
};
export default async function IFrame({
  src,
  title,
  className,
}: VideoComponentProps) {
  return (
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
      aria-hidden="true"
      className={`${cn(
        "w-full aspect-video self-stretch md:min-h-96"
      )} ${className}`}
    />
  );
}
