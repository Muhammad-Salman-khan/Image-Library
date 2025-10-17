const Card = ({ img, url, w }) => {
  return (
    <a
      href={url}
      target="_blank"
      className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-400 shadow-lg md:h-80 `}
    >
      <img
        src={img}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        {w}
      </span>
    </a>
  );
};

export default Card;
