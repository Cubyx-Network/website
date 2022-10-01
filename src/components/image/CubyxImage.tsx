const CubyxImage = ({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className: string;
  props?: any;
}) => {
  return (
    <picture className={className}>
      <img src={src} alt={alt} {...props} className={"w-full h-full"} />
    </picture>
  );
};

export default CubyxImage;
