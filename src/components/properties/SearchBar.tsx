import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  initialValue: string;
  onSearch: (query: string) => void;
}

export default function SearchBar({ initialValue, onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by address, city, or property name..."
          className="w-full p-4 pl-12 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-blue-600 rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}