export interface ImageProps {
    src: string;
    alt?: string;
    role?: string;
    isLazy?: boolean;
    className?: string;
    onClick?: (e: any) => void;
    onError?: (e: any) => void;
    fallbackImage?: React.ReactNode;
    fallbackSrc?: string;
  }
  