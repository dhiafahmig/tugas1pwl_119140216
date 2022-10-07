const tableSpesifikasi = ({ detailProduct, kategori }) => {

  return (
    <>
    <h3>{detailProduct.nama_barang}</h3>
      {
        kategori == 1 ? 
        <table>
          <tbody>
          <tr>
            <th>Brand:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.brand}</td>
          </tr>
          <tr>
            <th>Socket:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.socket}</td>
          </tr>
          <tr>
            <th>Cores:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.cores}</td>
          </tr>
          <tr>
            <th>Threads:</th>
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.threads}</td>
          </tr>
          </tbody>
        </table> 
        : null 
      }

      {
        kategori == 2 ? 
        <table>
          <tbody>
          <tr>
            <th>Chipset:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.chipset}</td>
          </tr>
          <tr>
            <th>Socket:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.socket}</td>
          </tr>
          <tr>
            <th>Support Ram:</th>
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.support_ram}</td>
          </tr>
          </tbody>
        </table> 
        : null 
      }

      {
        kategori == 3 ? 
        <table>
          <tbody>
          <tr>
            <th>Capacity:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.Capacity}</td>
          </tr>
          <tr>
            <th>Type:</th>
            <td>{detailProduct.spesifikasi && detailProduct.spesifikasi.Type}</td>
          </tr>
          <tr>
            <th>Speed:</th>
            <td>{ detailProduct.spesifikasi && detailProduct.spesifikasi.Speed}</td>
          </tr>
          </tbody>
        </table> 
        : null 
      }

    </>
  );
};

export default tableSpesifikasi;