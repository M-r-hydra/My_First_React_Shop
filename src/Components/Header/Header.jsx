//React
import React from "react";
//React
//Images
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
//Images
//CSS
import styles from "./Header.module.css";
//CSS
//Modules
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LOGO } from "../Image__ComponentExporter/Images";
//Modules
//REFS
const categoriesContainerRef = React.createRef();
const hiddenMenuContainerRef = React.createRef();
const shoppingCartItemsRef = React.createRef();
const likedItemsRef = React.createRef();
const sharedItemsRef = React.createRef();
//REFS

const Header = ({
  isFixed,
  cartItemsArray,
  sharedItemsArray,
  likedItemsArray,
  //
  setCartItemsArray,
  setSharedItemsArray,
  setLikedItemsArray,
}) => {
  //************ Thease Two Function are Using For hide/show Categories *************/
  const showHiddenMenu = () => {
    hiddenMenuContainerRef.current.style.opacity = "1";
    hiddenMenuContainerRef.current.style.zIndex = "555";
    hiddenMenuContainerRef.current.style.top = "7vh";
    hiddenMenuContainerRef.current.style.visibility = "visible";
  };
  const hideShowMenu = () => {
    hiddenMenuContainerRef.current.style.opacity = "0";
    hiddenMenuContainerRef.current.style.zIndex = "-555";
    hiddenMenuContainerRef.current.style.top = "3vh";
    hiddenMenuContainerRef.current.style.visibility = "hidden";
    hiddenMenuContainerRef.current.style.right = "3vw";
    setTimeout(() => {
      return (hiddenMenuContainerRef.current.style.right = "8vw");
    }, 200);
  };
  //*********** Thease Two Function are Using For hide/show Categories **************/

  // Making CartItemsContainer & LikedItemsContainer & SharedItemsContainer Visible
  const makeItVisible = (ref) => {
    return (ref.current.style.left = "1vw");
  };
  // Recive Items From LocaStorage By LocalStorage Index
  const localStorageItemGetter = (localStorageIndex) => {
    const localStorageIndexChecker = localStorage.getItem(localStorageIndex);
    const jsonFormater = JSON.parse(localStorageIndexChecker || "[]");
    if (jsonFormater) return jsonFormater;
    else return [];
  };
  // REMOVE ITEMS FROM LOCALSTORAGE AND UPPERSTATE
  const removeItemFromCartItems = (key) => {
    const copyOfState = [...cartItemsArray];
    const filterdByKey = copyOfState.filter((item) => {
      return item.key !== key;
    });
    setCartItemsArray(filterdByKey);
    return;
  };
  //
  const removeItemFroSharedItems = (key) => {
    const copyOfState = [...sharedItemsArray];
    const filterdByKey = copyOfState.filter((item) => {
      return item.key !== key;
    });
    setSharedItemsArray(filterdByKey);
    return;
  };
  //
  const removeItemForLikedItems = (key) => {
    const copyOfState = [...likedItemsArray];
    const filterdByKey = copyOfState.filter((item) => {
      return item.key !== key;
    });
    setLikedItemsArray(filterdByKey);
    return;
  };
  // REMOVE ITEMS FROM LOCALSTORAGE AND UPPERSTATE

  useEffect(() => {});
  return (
    <nav
      className={`${styles.headerContainer} ${isFixed ? styles.fixx : null}`}
    >
      <div className={styles.top}>
        <Link to="/login-signUp" className={styles.userItemsContainer}>
          ???????? / ?????? ??????
          <AiOutlineUser />
        </Link>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search For Products ...." />
          <select name="select" id="test">
            <option value="type1">select One</option>
            <option value="type1"> 1</option>
            <option value="type2"> 2</option>
            <option value="type2"> 3</option>
          </select>
          <AiOutlineSearch />
        </div>
        <div className={styles.iconContainer}>
          <img src={LOGO} alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.shoppingCardItemsContainer}>
          <div
            className={styles.basket}
            onClick={() => makeItVisible(shoppingCartItemsRef)}
          >
            <div className={styles.absoluteNumber}>
              {localStorageItemGetter("shoppingCart").length}
            </div>
            <BsBasket3 />
          </div>
          <div
            className={styles.liked}
            onClick={() => makeItVisible(likedItemsRef)}
          >
            <div className={styles.absoluteNumber}>
              {localStorageItemGetter("likedItems").length}
            </div>
            <AiFillHeart />
          </div>
          <div
            className={styles.shared}
            onClick={() => makeItVisible(sharedItemsRef)}
          >
            <div className={styles.absoluteNumber}>
              {localStorageItemGetter("sharedItems").length}
            </div>
            <BsFillShareFill />
          </div>
        </div>
        <div className={styles.navItemsContainer}>
          <Link to="/">???????? ????????</Link>
          <Link to="/shop">??????????????</Link>
          <Link to="/about-us">???????????? ????</Link>
          <Link to="/contact-us">???????? ???? ????</Link>
          <Link to="/blog">????????</Link>
        </div>
        <div
          className={styles.categoriesContainer}
          ref={categoriesContainerRef}
          onMouseEnter={() => {
            showHiddenMenu();
          }}
          onMouseLeave={() => {
            hideShowMenu();
          }}
        >
          <IoIosArrowDown />
          <p>BROWS CATEGORIES</p>
          <GiHamburgerMenu />
          <div
            className={styles.absoluteMenuItems}
            ref={hiddenMenuContainerRef}
            onMouseEnter={() => {
              showHiddenMenu();
            }}
          >
            <div className={styles.dropDowmCustomContainer}>
              <div className={styles.top}>
                <Link to="/arayeshi" className={styles.arayeshiContainer}>
                  ????????????
                </Link>
                <Link to="/skin" className={styles.skinContainer}>
                  ????????
                </Link>
              </div>
              <div className={styles.bottom}></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.shoppingCartItems}
        ref={shoppingCartItemsRef}
        onMouseLeave={() => {
          shoppingCartItemsRef.current.style.left = "-31vw";
        }}
        style={{
          overflowY:
            localStorageItemGetter("shoppingCart").length > 6
              ? "scroll"
              : "hidden",
        }}
      >
        <h2>?????? ????????</h2>
        {localStorageItemGetter("shoppingCart").map((item) => {
          return (
            <div
              key={item.key}
              className={styles.items}
              onClick={() => {
                removeItemFromCartItems(item.key);
              }}
            >
              <div className={styles.left}>
                <img src={item.image} alt="sss" />
              </div>
              <div className={styles.right}>
                <p>{item.name}</p>
                <p>
                  ??????????{" "}
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                </p>
              </div>
            </div>
          );
        })}
        <br />
      </div>
      <div
        className={styles.likedItems}
        ref={likedItemsRef}
        onMouseLeave={() => {
          likedItemsRef.current.style.left = "-31vw";
        }}
        style={{
          overflowY:
            localStorageItemGetter("likedItems").length > 6
              ? "scroll"
              : "hidden",
        }}
      >
        <h2>???????? ?????????? ???????? ????</h2>
        {localStorageItemGetter("likedItems").length !== 0
          ? localStorageItemGetter("likedItems").map((item) => {
              return (
                <div
                  key={item.key}
                  className={styles.items}
                  onClick={() => {
                    removeItemForLikedItems(item.key);
                  }}
                >
                  <div className={styles.left}>
                    <img src={item.image} alt="sss" />
                  </div>
                  <div className={styles.right}>
                    <p>{item.name}</p>
                    <p>
                      ??????????{" "}
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    </p>
                  </div>
                </div>
              );
            })
          : "???????? ?????????? ???????? ???? ???????? ?????? "}
      </div>
      <div
        className={styles.sharedItems}
        ref={sharedItemsRef}
        onMouseLeave={() => {
          sharedItemsRef.current.style.left = "-31vw";
        }}
        style={{
          overflowY:
            localStorageItemGetter("sharedItems").length > 6
              ? "scroll"
              : "hidden",
        }}
      >
        ???????? ???????????? ?????????? ???? ??????????
        {localStorageItemGetter("sharedItems").map((item) => {
          return (
            <div
              key={item.key}
              className={styles.items}
              onClick={() => {
                removeItemFroSharedItems(item.key);
              }}
            >
              <div className={styles.left}>
                <img src={item.image} alt="sss" />
              </div>
              <div className={styles.right}>
                <p>{item.name}</p>
                <p>
                  ??????????{" "}
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
