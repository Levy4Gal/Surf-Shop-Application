import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages & components
import Home from "./pages/Home/Home";
import AdminHome from "./pages/AdminHome/AdminHome";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./pages/Navbar/Navbar";
import NotAuthorized from "./pages/NotAuthorized/NotAuthorized";
import Profile from "./pages/Profile/Profile";
import AdminAccountManagement from "./pages/AdminAccountManagement/AdminAccountManagement";
import Cart from "./pages/Cart/Cart";

function App() {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [amountInCart, setAmountInCart] = useState(0);
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [value, setValue] = useState([0, 1000]);
  const [searchText, setSearchText] = useState("");
  const [contactList, setContactList] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          email={email}
          setEmail={setEmail}
          amountInCart={amountInCart}
          setAmountInCart={setAmountInCart}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          isAdmin={isAdmin}
          setIsAdmin={setIsAdmin}
          cart={cart}
          setCart={setCart}
        />
        <div className="pages">
          <Routes>
            {isAdmin && isLoggedIn && (
              <>
                <Route
                  path="/admin"
                  element={<AdminHome isAdmin={isAdmin} />}
                />
                <Route path="/signin" element={<NotAuthorized />} />
                <Route path="/logout" />
              </>
            )}
            {isLoggedIn && !isAdmin && (
              <>
                <Route path={"/logout"} />
                <Route
                  path={`/${email}`}
                  element={
                    <>
                      <Profile
                        email={email}
                        setContactList={setContactList}
                        contactList={contactList}
                      />
                    </>
                  }
                />
                <Route path="/signin" element={<NotAuthorized />} />
                <Route
                  path="/cart"
                  element={
                    <>
                      <Cart
                        isLoggedIn={isLoggedIn}
                        amountInCart={amountInCart}
                        setAmountInCart={setAmountInCart}
                        cart={cart}
                        email={email}
                        setEmail={setEmail}
                        setCart={setCart}
                      />
                    </>
                  }
                />
              </>
            )}
            {isLoggedIn && !isAdmin && (
              <Route
                path="/"
                element={
                  <Home
                    isLoggedIn={isLoggedIn}
                    amountInCart={amountInCart}
                    setAmountInCart={setAmountInCart}
                    cart={cart}
                    setCart={setCart}
                    brand={brand}
                    setBrand={setBrand}
                    category={category}
                    setCategory={setCategory}
                    value={value}
                    setValue={setValue}
                    searchText={searchText}
                    setSearchText={setSearchText}
                  />
                }
              />
            )}
            <Route path="/admin" element={<NotAuthorized />} />
            <Route
              path="/adminManagement"
              element={
                <AdminAccountManagement
                  isAdmin={isAdmin}
                  email={email}
                  setContactList={setContactList}
                  contactList={contactList}
                />
              }
            />
            {!isLoggedIn && !isAdmin && (
              <>
                <Route
                  path="/"
                  element={
                    <Home
                      isLoggedIn={isLoggedIn}
                      amountInCart={amountInCart}
                      setAmountInCart={setAmountInCart}
                      brand={brand}
                      setBrand={setBrand}
                      category={category}
                      setCategory={setCategory}
                      value={value}
                      setValue={setValue}
                      searchText={searchText}
                      setSearchText={setSearchText}
                    />
                  }
                />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/signin"
                  element={
                    <SignIn
                      email={email}
                      setEmail={setEmail}
                      isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                      isAdmin={isAdmin}
                      setIsAdmin={setIsAdmin}
                    />
                  }
                />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
