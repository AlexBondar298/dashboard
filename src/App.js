import { useState } from "react";

import MenuItem from "./componets/menu";
import Table from "./componets/table";
import { Pagination } from "./componets/pagination";

import dataTable from "./DataTable.json";
import menuData from "./MenuItems.json";

function App() {
  const menuItems = [...menuData];

  const [search, setSearch] = useState("");

  const [itemTable, setItemTable] = useState(dataTable);

  // ---------- Pagination ---------- //

  const [arrayPagination, setArrayPagination] = useState(dataTable);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableLengthPage, setTableLengthPage] = useState(6);
  const lastTablePage = currentPage * tableLengthPage;
  const firstTablePage = lastTablePage - tableLengthPage;
  const totalTableLength = arrayPagination.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const handlePageChange = (way) => {
    if (way === "moveOn") {
      setCurrentPage((prev) => (prev < 96 ? prev + 3 : (prev = 90)));
    }
    if (way === "backUp") {
      setCurrentPage((prev) => (prev > 4 ? prev - 3 : (prev = 1)));
    }
  };
  // ---------- End of Pagination ---------- //

  return (
    <div className="body">
      <div className="container">
        {/* -- Sidebar Section -- */}
        <aside className="aside">
          <div className="sidebar">
            <a href="#" className="logo">
              <img src="assets/img/logo/logo.svg" className="logo__img" alt="logo" />
              <span>v.01</span>
            </a>

            <nav className="menu">
              <ul className="menu__list">
                {menuItems.map((item, index) => (
                  <MenuItem key={index} title={item.title} defaultImg={item.defaultImg} hoverImg={item.hoverImg} alt={item.alt} />
                ))}
              </ul>
            </nav>

            <div class="user-profile">
              <img src="assets/img/image/user-photo.png" className="menu__link-img" alt="message-question" />
              <div class="user-profile__inform">
                <h2 className="menu__link-name">Evano</h2>
                <p className="menu__link-position">Project Manager</p>
              </div>
            </div>
          </div>
        </aside>
        {/* -- End of Sidebar Section -- */}

        {/* -- Main Content -- */}
        <main className="main">
          <section className="product">
            <h3 className="product__puser-profile">Hello Evano 👋🏼,</h3>
            <div className="product__inner">
              <div className="product__list">
                <div className="product__item">
                  <h4 className="product__item-title">All Customers</h4>
                  <p className="product__item-members">Active Members</p>
                </div>

                <div className="product__search">
                  <img src="assets/img/icon/search.svg" alt="search" />
                  <input type="text" value={search} placeholder="Search" onChange={(event) => setSearch(event.target.value)} />
                </div>
              </div>
              <div className="product__table">
                <table>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Company</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {itemTable
                      .filter((elem) => elem.company.toLocaleUpperCase().includes(search.toLocaleUpperCase()))
                      .slice(firstTablePage, lastTablePage)
                      .map((elem, index) => (
                        <Table key={index} {...elem} />
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="product__footer">
                <p>Showing data 1 to 8 of 256K entries</p>
                <Pagination tableLengthPage={tableLengthPage} totalTableLength={totalTableLength} paginate={paginate} currentPage={currentPage} handlePageChange={handlePageChange} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
