import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import style from '../styles/home.module.css';
import cpu from "../images/processor.png";
import mobo from "../images/motherboard.png";
import ram from "../images/ram.png";

class Home extends React.Component {

  render () {
    return (
      <>
        <Header/>
        <h1 className={style.text_heading} >Kategori:</h1>
        <div className={style.flex_container}>
          <Link className={style.text_kategori}  to={`/product/1`}>
            <div className={style.flex_item}>
              <img src={cpu} alt="cpu" className={style.kategori_image} />
              <h3>Processor</h3>
            </div>
          </Link>
          <Link className={style.text_kategori} to={`/product/2`}>
            <div className={style.flex_item}>
              <img src={mobo} alt="motherboard" className={style.kategori_image} />
              <h3>Motherboard</h3>
            </div>
          </Link>
          <Link className={style.text_kategori} to={`/product/3`}>
            <div className={style.flex_item}>
              <img src={ram} alt="ram" className={style.kategori_image} />
              <h3>Ram</h3>
            </div>
          </Link>
        </div>
      </>
    )
  };
}

export default Home;
