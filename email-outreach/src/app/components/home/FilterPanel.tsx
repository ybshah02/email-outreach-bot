"use client";

import { Dispatch, SetStateAction } from 'react';

interface FilterPanelProps {
  setFilter: Dispatch<SetStateAction<string>>;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ setFilter }) => {
  return (
    <aside className="w-1/4 hidden md:block">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by Date"
          className="border p-2 w-full text-sm font-normal"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by Company"
          className="border p-2 w-full text-sm font-normal"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by Template"
          className="border p-2 w-full text-sm font-normal"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </aside>
  );
};

export default FilterPanel;
