import Image from "next/image";

export default function Picture() {
  const checkWidth = () => {
    if (window.innerWidth > 768) return false;
    return true;
  };

  const isMobile = checkWidth();

  return (
    <div>
      {isMobile ? (
        <Image
          src="/images/mobilePortrait2.1.jpg"
          alt="Image of me"
          priority={true}
          width={2425}
          height={4208}
          className="absolute h-full"
        />
      ) : (
        <Image
          src="/images/wallSelfie.webp"
          alt="Image of me"
          priority={true}
          width={5472}
          height={3648}
          className="absolute"
        />
      )}
    </div>
  );
}
