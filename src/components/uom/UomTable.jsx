import React, { useEffect, useState } from "react";
import { useSearch } from "../../contexts/SearchContext";
import { mockUOM } from "../../constants/mockdata";
import { useNavigate } from "react-router";

const UomTable = () => {
  const [displayItems, SetDisplayItems] = useState(mockUOM);
  const navigate = useNavigate();
  const { searchQuery } = useSearch();

  // search logic
  useEffect(() => {
    const filteredItems = mockUOM?.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery?.toLowerCase())
      )
    );
    if (searchQuery?.trim() !== "" && filteredItems.length === 0) {
      SetDisplayItems([]);
    } else if (searchQuery?.trim() !== "") {
      SetDisplayItems(filteredItems);
    } else {
      SetDisplayItems(mockUOM);
    }
  }, [searchQuery]);

  return (
    <div className="w-full h-full">
      <div className=" rounded-xl border border-gray-200 h-full flex flex-col overflow-hidden">
        
        {/* Table Header */}
        <div className="overflow-x-auto w-full hide-scrollbar">
          <table className="w-full min-w-[600px] table-auto">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  UOM
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  Code
                </th>
                <th className="px-4 py-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Table Body */}
        <div className="overflow-y-auto overflow-x-auto flex-1 hide-scrollbar">
          <table className="w-full table-fixed">
            <tbody className="divide-y divide-gray-300">
              {displayItems.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-10 text-xl">
                    No items found
                  </td>
                </tr>
              ) : (
                displayItems.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => navigate(`/admin/uom/edit/${item.id}`)}
                    className="odd:bg-gray-100 even:bg-white hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-300 group cursor-pointer"
                  >
                    <td className="px-4 py-3 text-xs sm:text-sm font-bold text-gray-800 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-fit flex items-center justify-center text-gray-800 text-sm font-bold">
                          {item.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm font-bold text-gray-800 whitespace-nowrap">
                      <div className="text-base text-gray-800 font-semibold group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm font-bold text-gray-800 whitespace-nowrap">
                      <span className="text-sm text-gray-800 font-medium">
                        {item.code}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-sm font-bold text-gray-800 whitespace-nowrap text-center">
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

export default UomTable;
