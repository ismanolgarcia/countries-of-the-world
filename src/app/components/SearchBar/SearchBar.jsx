import Image from 'next/image';
import seachIcon from '/public/icons/icons8-búsqueda-50.png';

export const SearchBar = ({ handleFiltroChange, selectRegion }) => {
  return (
    <div className="flex justify-between flex-col items-center sm:flex-row m-4 sm:m-0 gap-4">
      <label
        htmlFor="text"
        className="flex items-center gap-2 w-full  bg-SnowWhite dark:bg-DeepSteelBlue dark:text-white rounded-md"
      >
        <Image
          src={seachIcon}
          alt="busqueda"
          className="ml-5 invert-0 dark:invert "
          width={20}
          height={20}
        />
        <input
          type="text"
          id="text"
          placeholder={'Search for a country....'}
          className="bg-transparent focus:outline-none  w-full p-2"
          onChange={handleFiltroChange}
        />
      </label>

      <select
        onChange={selectRegion}
        className="w-full sm:w-auto bg-SnowWhite dark:bg-DeepSteelBlue dark:text-SnowWhite focus:outline-none p-2 rounded-md cursor-pointer"
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
