'use client';
import { uid } from 'uid';
import { useState } from 'react';
import { SearchBar, Card } from './components';
import data from '../data/data.json';

export default function Home() {
  const [country, setCountry] = useState('');
  const [countryResult, setCountryResult] = useState(data);

  const handleFiltroChange = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);

    const result = data.filter((item) =>
      item.name.toLowerCase().includes(newCountry.toLowerCase())
    );

    setCountryResult(result);
  };

  const selectRegion = (e) => {
    const newCountry = e.target.value;
    const continent = data.filter((item) =>
      item.region.toLowerCase().includes(newCountry.toLowerCase())
    );

    setCountryResult(continent);
  };

  return (
    <main className="flex flex-col container mx-auto pt-12 gap-10">
      <SearchBar
        handleFiltroChange={handleFiltroChange}
        selectRegion={selectRegion}
      />
      <div className="flex flex-row flex-wrap justify-center sm:justify-normal gap-10  lg:gap-x-12 xl:gap-x-10  2xl:gap-x-32 gap-y-10">
        {countryResult.map(({ flags, name, population, region, capital }) => (
          <Card
            key={uid()}
            flag={flags['svg']}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </div>
    </main>
  );
}
