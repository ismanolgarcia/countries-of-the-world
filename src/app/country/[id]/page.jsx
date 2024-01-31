import Image from 'next/image';
import Link from 'next/link';
import data from '../../../data/data.json';
import leftIcon from '/public/icons/icons8-left.png';

export default function Countrys({ params }) {
  const country = data.find(
    (item) =>
      decodeURIComponent(item.name)
        .toLowerCase()
        .replace(/[\s,]/g, '-')
        .replace(/å/g, 'a') == params.id
  );

  const {name, nativeName, flag, population, region, subregion, capital, topLevelDomain, currencies, languages} = country;

  return (
    <main className="flex md:mt-0 mt-10 p-5">
      <div className="container flex mx-auto gap-10 items-start flex-col md:flex-row xl:gap-24 md:items-end lg:items-center  ">
        <div className="md:h-[500px] md:w-[600px] flex flex-col gap-20">
          <Link
            href={'/'}
            className="flex justify-center text-center bg-MediunGray text-SnowWhite hover:scale-105 w-28 p-2 gap-2"
          >
            <Image src={leftIcon} alt="left icon" width={25} height={5} /> Back
          </Link>
          <Image
            src={flag}
            alt="bandera"
            className="object-cover"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="p-0 lg:p-8 ">
          <h3 className="dark:text-SnowWhite font-extrabold mb-2 text-2xl">
            {name}
          </h3>
          <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">
                Native Name:
              </span>
              {nativeName}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">
                Population:
              </span>
              {population}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">Region: </span>
              {region}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">
                Sub Region:
              </span>
              {subregion}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">Capital: </span>
              {capital}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">
                Top Level Domain:
              </span>
              {topLevelDomain}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">
                Currencies:
              </span>
              {currencies[0].code}
            </p>
            <p className="dark:text-gray-300">
              <span className="font-bold dark:text-SnowWhite">Languages: </span>
              {languages[0].name}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
