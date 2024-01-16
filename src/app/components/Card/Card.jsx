import Image from 'next/image';

export const Card = ({ flag, name, population, region, capital }) => {
  return (
    <div className="bg-SnowWhite  dark:bg-DeepSteelBlue flex flex-col w-72 h-80">
      <div className="h-40 w-72">
        <Image
          src={flag}
          alt="bandera"
          className="object-cover h-full w-72"
          width={1000}
          height={1000}
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <h3 className="dark:text-SnowWhite font-extrabold mb-2">{name}</h3>
        <div>
          <p className="dark:text-SnowWhite ">
            <span className="font-bold">Population: </span>
            {population}
          </p>
          <p className="dark:text-SnowWhite">
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p className="dark:text-SnowWhite">
            <span className="font-bold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
