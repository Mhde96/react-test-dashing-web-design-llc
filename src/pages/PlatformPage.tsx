import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { TableData } from "../components/TableData";
import { TableHead } from "../components/TableHead";
import { PlatformPagePropsType } from "../types/pages/PlatformPagePropsType";

export const PlatformPage = ({
  data,
  handleChangeSearch,
  handleChangeSortBy,
  sortBy,
  setData,
  dataFiltered,
  user,
}: PlatformPagePropsType) => {
  const [editCell, setEditCell] = useState({
    rowIndex: 0,
    columnIndex: "",
  });
  return (
    <div id="platform-page-styles">
      <div className="layout">
        <br />
        <div className="description">
          <span>
            Meet our valued customers We're dedicated to ensuring a secure and
            seamless experience for all our customers. Thanks for being a part
            of our community 🌟
          </span>
        </div>
        <hr />
        <div className="search-container">
          <InputBox
            handleChange={handleChangeSearch}
            placeholder="Search"
            type="text"
          />
        </div>
        <hr />
        <div className="customer-table-contaienr">
          <table className="product-table">
            <tr>
              <TableHead
                title="id"
                sortBy={sortBy}
                ascending={"id"}
                descending={"reverseid"}
                onClick={() => {
                  if (sortBy == "id") handleChangeSortBy("reverseid");
                  else handleChangeSortBy("id");
                }}
              />
              <TableHead
                title="name"
                sortBy={sortBy}
                ascending={"title"}
                descending={"reversetitle"}
                onClick={() => {
                  if (sortBy == "title") handleChangeSortBy("reversetitle");
                  else handleChangeSortBy("title");
                }}
              />
              <TableHead
                title="Price"
                sortBy={sortBy}
                ascending={"price"}
                descending={"reverseprice"}
                onClick={() => {
                  if (sortBy == "price") handleChangeSortBy("reverseprice");
                  else handleChangeSortBy("price");
                }}
              />
            </tr>

            {user.role == "admin" ? (
              <>
                {dataFiltered()?.map((item, index) => (
                  <tr key={item.id}>
                    <TableData title={item.id} isEdit={false} />
                    <TableData
                      fill={true}
                      rowIndex={index}
                      columnIndex={"title"}
                      title={item.title}
                      isEdit={
                        editCell.columnIndex == "title" &&
                        editCell.rowIndex == index
                      }
                      onClick={() => {
                        setEditCell({ columnIndex: "title", rowIndex: index });
                      }}
                      handleChange={(value) => {
                        let copyOfData = data;
                        copyOfData[index].title = value;
                        setEditCell({
                          columnIndex: "",
                          rowIndex: 0,
                        });
                        setData(copyOfData);
                      }}
                    />

                    <TableData
                      rowIndex={index}
                      columnIndex={"price"}
                      title={item.price}
                      isEdit={
                        editCell.columnIndex == "price" &&
                        editCell.rowIndex == index
                      }
                      onClick={() => {
                        setEditCell({ columnIndex: "price", rowIndex: index });
                      }}
                      handleChange={(value) => {
                        let copyOfData = data;
                        copyOfData[index].price = value;
                        setEditCell({
                          columnIndex: "",
                          rowIndex: 0,
                        });
                        setData(copyOfData);
                      }}
                    />
                  </tr>
                ))}
              </>
            ) : (
              <>
                {dataFiltered()?.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
