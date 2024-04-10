import { useCallback, useState } from "react";

import { ImageProps } from "./types";

export default function Img(props: ImageProps) {
  const {
    src,
    alt,
    role,
    className,
    fallbackSrc,
    fallbackImage,
    onError,
    onClick,
    isLazy = true,
  } = props;

  const [fallback, setFallback] = useState(false);

  const handleErrorImage = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (fallbackSrc) e.currentTarget.src = fallbackSrc;
      else if (fallbackImage) setFallback(true);
      if (onError) onError(e);
    },
    [onError, fallbackImage],
  );

  return fallback || !src ? (
    <>{fallbackImage}</>
  ) : (
    <img
      src={src}
      alt={alt}
      role={role}
      className={className}
      loading={isLazy ? "lazy" : "eager"}
      decoding="async"
      onClick={onClick}
      onError={handleErrorImage}
    />
  );
}
