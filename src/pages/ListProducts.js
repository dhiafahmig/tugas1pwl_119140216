import React from "react";
import Header from "../components/Header";
import Modal from '../components/ModalDetailProduct.js';
import TableSpesifikasi from '../components/tableSpesifikasi.js';
import style from '../styles/listProduct.module.css';
import fetchData from "../services/data.service";
import cpu from "../images/processor.png";
import mobo from "../images/motherboard.png";
import ram from "../images/ram.png";
import { useParams } from "react-router-dom";

import {tambahBarang} from '../redux/actions/keranjangAction'
import {connect} from 'react-redux';


const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class ListProducts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      show: false,
      detailPoduct:{}
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    let { id } = this.props.params;

    fetchData.getData(id).then((response)=>{
      this.setState((state, props) => ({
        product: response.data
      }));
    })
  }

  showModal = (product) => {
    this.setState({ show: true });
    this.setState({detailPoduct: product})
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render () {
    
    return (
      <>
        <Header jumlahBarang={this}/>
        <Modal show={this.state.show} handleClose={this.hideModal}>  
          <TableSpesifikasi detailProduct={this.state.detailPoduct} kategori={this.state.product.id} />
          <h4>{rupiah(this.state.detailPoduct.harga)}</h4>
        </Modal>
        <div className={style.container}>
          <h1 className={style.text_heading} >{this.state.product.nama_kategori}:</h1>
          <div className={style.row}>
            { this.state.product.list_product &&
              this.state.product.list_product.map((product, index)=>{
                return (
                  <div key={index} className={style.column}>
                    <div className={style.card}>
                      <h3>{product.nama_barang}</h3>
                      <h4>{rupiah(product.harga)}</h4>
                      <div className={style.buttonGroupA}>
                        <button className={style.button_add} onClick={()=>{this.showModal(product)}} >
                          Detail
                        </button>

                        <span/>

                        <button className={style.button} onClick={()=>this.props.tambahBarang(product)} >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    )
  };
}


function mapDispatchToProps(dispatch){
  return{
    tambahBarang :(barang)=>dispatch(tambahBarang(barang))
  }
}

export default withParams(connect(null,mapDispatchToProps)(ListProducts));
