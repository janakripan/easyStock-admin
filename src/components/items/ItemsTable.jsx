import React, { useEffect, useState } from "react";
import { mockItems } from "../../constants/mockdata";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

import { useSearch } from "../../contexts/SearchContext";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router";

const ItemsTable = ({ onEdit }) => {
  const [displayItems, SetDisplayItems] = useState(mockItems);
  const navigate = useNavigate();
  const { searchQuery } = useSearch();

  // search logic
  useEffect(() => {
    const filteredItems = mockItems?.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery?.toLowerCase())
      )
    );
    if (searchQuery?.trim() !== "" && filteredItems.length === 0) {
      SetDisplayItems([]);
    } else if (searchQuery?.trim() !== "") {
      SetDisplayItems(filteredItems);
    } else {
      SetDisplayItems(mockItems);
    }
  }, [searchQuery]);

  // download data
  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Items");

    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Product Name", key: "name", width: 30 },
      { header: "Price", key: "price", width: 15 },
      { header: "Unit", key: "uom", width: 10 },
      { header: "Category", key: "category", width: 20 },
    ];

    mockItems.forEach((item) => {
      const flattened = {};
      Object.entries(item).forEach(([key, value]) => {
        flattened[key] = Array.isArray(value) ? value.join(", ") : value;
      });
      worksheet.addRow(flattened);
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFCCE5FF" },
      };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    saveAs(blob, `items-data-${formattedDate}.xlsx`);
  };

  return (
    <div className="w-full h-full">
      <div className="bg-black/15 rounded-xl border border-gray-200 h-full flex flex-col overflow-hidden">
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Product Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Unit
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Category
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">
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
                  <td colSpan={6} className="text-center py-10 text-xl">
                    No items found
                  </td>
                </tr>
              ) : (
                displayItems.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => navigate(`/admin/items/edit/${item.id}`)}
                    className="odd:bg-gray-100 even:bg-white hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-300 group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-white/3 to-white/7 rounded-full flex items-center justify-center text-gray-800 text-sm font-bold shadow-lg">
                          {item.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-base text-gray-800 font-semibold group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-800 font-medium">
                        ₹{item.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                        {item.uom}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-sm font-bold rounded-full shadow-lg bg-black/5 border-white/5 backdrop-blur-xl">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
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

export default ItemsTable;
