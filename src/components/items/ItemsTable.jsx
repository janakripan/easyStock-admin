import React, { useEffect, useState } from "react";
import { mockItems } from "../../constants/mockdata";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { useSearch } from "../../contexts/SearchContext";
import { FiEdit } from "react-icons/fi";

const ItemsTable = ({onEdit}) => {
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [displayItems, SetDisplayItems] = useState(mockItems);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

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

  //download data
  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Items");

    //  headers
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
        if (Array.isArray(value)) {
          flattened[key] = value.join(", ");
        } else {
          flattened[key] = value;
        }
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

  // Sort data
  const processedItems = displayItems?.sort((a, b) => {
    if (!sortField) return 0;

    const aVal = a[sortField];
    const bVal = b[sortField];

    if (typeof aVal === "string") {
      return sortDirection === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
  });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    setCurrentPage(0); // Reset page on sort
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return <FaSort />;
    return sortDirection === "asc" ? <FaSortDown /> : <FaSortUp />;
  };

  const handleEdit = (item) => {
   onEdit(item)
  };

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Table Container */}
        <div className="bg-black/15 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/5  shadow-black/40 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary/60 via-primary/30 to-primary/60 ">
                <tr>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold  uppercase tracking-wide cursor-pointer hover:bg-white/20 transition-all duration-200 group"
                    onClick={() => handleSort("id")}
                  >
                    <div className="flex items-center">
                      ID
                      {getSortIcon("id")}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold  uppercase tracking-wide cursor-pointer hover:bg-white/10 transition-all duration-200"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center">
                      Product Name
                      {getSortIcon("name")}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold  uppercase tracking-wide cursor-pointer hover:bg-white/10 transition-all duration-200"
                    onClick={() => handleSort("price")}
                  >
                    <div className="flex items-center">
                      Price
                      {getSortIcon("price")}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold  uppercase tracking-wide">
                    Unit
                  </th>
                  <th
                    className="px-6 py-4 text-left text-sm font-semibold  uppercase tracking-wide cursor-pointer hover:bg-white/10 transition-all duration-200"
                    onClick={() => handleSort("category")}
                  >
                    <div className="flex items-center">
                      Category
                      {getSortIcon("category")}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold  uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {processedItems.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10  text-xl"
                    >
                      No items found
                    </td>
                  </tr>
                ) : (
                  processedItems
                    .slice(
                      currentPage * itemsPerPage,
                      (currentPage + 1) * itemsPerPage
                    )
                    .map((item, index) => (
                      <tr
                        key={index}
                        className="odd:bg-base-100 even:bg-base-200 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 transition-all duration-300 group"
                      >
                        {/* your <td> content stays the same */}
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gradient-to-r from-white/3 to-white/7 rounded-full flex items-center justify-center  text-sm font-bold shadow-lg">
                              {item.id}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-semibold  group-hover:text-cyan-400 transition-colors">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-2xl font-semibold bg-clip-text ">
                              ₹{item.price}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gray-600 text-gray-200 border border-gray-600">
                            {item.uom}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-3 py-1 text-sm font-bold rounded-full shadow-lg  bg-black/5 border-white/5 backdrop-blur-xl">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center space-x-3">
                            <button
                              onClick={() => handleEdit(item)}
                              className="inline-flex items-center px-3 py-2 text-sm font-medium  bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 hover:bg-primary/80 rounded-lg focus:outline-none  transform hover:scale-105 transition-all duration-200 shadow-lg shadow-black/10"
                            >
                              <FiEdit />
                              Edit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-primary/60 via-primary/30 to-primary/50 px-6 py-4 border-t border-gray-700">
            <div className="flex flex-col gap-6 md:flex-row items-center justify-between">
              <div className="flex justify-center py-">
                <ReactPaginate
                  previousLabel={<FiChevronLeft size={20} />}
                  nextLabel={<FiChevronRight size={20} />}
                  breakLabel={"..."}
                  pageCount={Math.ceil(processedItems.length / itemsPerPage)}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={({ selected }) => setCurrentPage(selected)}
                  containerClassName="flex justify-center gap-2 items-center text-sm font-medium "
                  pageClassName=""
                  pageLinkClassName="px-3 py-1 rounded hover:bg-white/10"
                  activeLinkClassName="bg-primary/75 backdrop-blur-xl  font-bold"
                  previousLinkClassName="px-3 py-1 rounded hover:bg-white/10"
                  nextLinkClassName="px-3 py-1 rounded hover:bg-white/10"
                  disabledLinkClassName="opacity-30 cursor-not-allowed"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDownloadExcel()}
                  className="  bg-neutral/40 hover:scale-105 active:scale-100 active:bg-black/30 backdrop-blur-lg px-3 py-2 rounded-lg border-neutral/50 border shadow-lg shadow-neutral/15 transition-all duration-300"
                >
                  download excel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
