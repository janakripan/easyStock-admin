import React, { useEffect, useState } from "react";
import { useSearch } from "../../contexts/SearchContext";
import { mockCategories } from "../../constants/mockdata";
import { useNavigate } from "react-router";

const CategoriesTable = () => {
  const [displayItems, setDisplayItems] = useState(mockCategories);
  const navigate = useNavigate();
  const { searchQuery } = useSearch();

  // Search logic
  useEffect(() => {
    const filteredItems = mockCategories?.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery?.toLowerCase())
      )
    );
    if (searchQuery?.trim() !== "" && filteredItems.length === 0) {
      setDisplayItems([]);
    } else if (searchQuery?.trim() !== "") {
      setDisplayItems(filteredItems);
    } else {
      setDisplayItems(mockCategories);
    }
  }, [searchQuery]);

  return (
    <div className="w-full h-full">
      <div className="rounded-xl border border-gray-200 h-full flex flex-col overflow-hidden">
        
        {/* Table Wrapper for Responsiveness */}
        <div className="overflow-x-auto w-full hide-scrollbar">
          <table className="w-full min-w-[600px] table-auto">
            {/* Table Head */}
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  Category Name
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  Description
                </th>
                <th className="px-4 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-300">
              {displayItems.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-10 text-sm sm:text-lg text-gray-500"
                  >
                    No items found
                  </td>
                </tr>
              ) : (
                displayItems.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => navigate(`/admin/category/edit/${item.id}`)}
                    className="odd:bg-gray-100 even:bg-white hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-300 group cursor-pointer"
                  >
                    <td className="px-4 py-3 text-xs sm:text-sm font-bold text-gray-800 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm text-gray-700 whitespace-nowrap">
                      {item.description}
                    </td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      <input
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                        defaultChecked
                        className="toggle toggle-success"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTable;
