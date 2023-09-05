import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function Card({ itemProduct, setItemProduct }) {
  const handleRemove = (productId) => {
    const updatedItemProduct = itemProduct.filter(
      (item) => item.id !== productId
    );
    setItemProduct(updatedItemProduct);
  };
  const handleIncreaseQuantity = (productId) => {
    const updatedItemProduct = itemProduct.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setItemProduct(updatedItemProduct);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedItemProduct = itemProduct.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setItemProduct(updatedItemProduct);
  };

  const handleTotal = () => {
    setItemProduct([]);
  };

  const calculateTotalPrice = () => {
    const totalPrice = itemProduct.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return totalPrice;
  };

  return (
    <div>
      <h1 style={{ background: "red", color: "#fff", textAlign: "center" }}>
        Card
      </h1>
      <table style={{ width:" 100%",borderCollapse:"collapse"}}>
        <thead style={{ border: "1px solid" }}>
          <tr>
            <th style={{textAlign:"center",border:"1px solid", padding:"10px"}}>STT</th>
            <th  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>Name</th>
            <th  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>Image</th>
            <th  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>Price</th>
            <th  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>Số lượng</th>
            <th  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>Thành tiền</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemProduct.map((item, index) => (
            <tr key={item.id}>
              <td  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>{index + 1}</td>
              <td  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>{item.title}</td>
              <td  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td  >
              <td  style={{textAlign:"center",border:"1px solid", padding:"10px"}}>{item.price}</td>
              <td style={{textAlign:"center",border:"1px solid", padding:"10px"}} >
                <span style={{ cursor: "pointer" }}>
                  <RemoveCircleOutlineIcon
                    onClick={() => handleDecreaseQuantity(item.id)}
                  ></RemoveCircleOutlineIcon>
                </span>
                {item.quantity}
                <span style={{ cursor: "pointer" }}>
                  <AddCircleOutlineIcon
                    onClick={() => handleIncreaseQuantity(item.id)}
                  ></AddCircleOutlineIcon>
                </span>
              </td >
              <td style={{textAlign:"center",border:"1px solid", padding:"10px"}}>{item.price * item.quantity}</td>
              <td style={{textAlign:"center",border:"1px solid", padding:"10px"}}>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={5}
              style={{
                textAlign: "right",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
              Tổng tiền:
            </td>
            <td style={{ color: "red", fontWeight: "600", fontSize: "20px" }}>
              {calculateTotalPrice()}
            </td>
            <td style={{textAlign:"center", padding:"10px"}}>
              <button onClick={handleTotal} style={{ background: "gray" }}>
                Thanh toán
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
