import { SearchBar } from './components';

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto pt-12 gap-10">
      <SearchBar />
      <h1>flags</h1>
    </main>
  );
}
