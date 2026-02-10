import React from "react";

type LazyImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const LazyImage: React.FC<LazyImageProps> = ({ loading, decoding, src, fallbackSrc, ...rest }) => {
  const [currentSrc, setCurrentSrc] = React.useState(src);

  return (
    <img
      loading={loading ?? "lazy"}
      decoding={decoding ?? "async"}
      src={currentSrc}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      {...rest}
    />
  );
};

export default LazyImage;
