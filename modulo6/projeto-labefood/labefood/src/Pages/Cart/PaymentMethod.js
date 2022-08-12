import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React  from "react";
import { useGlobal } from "../../Global/GlobalStateContext";


const PaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useGlobal()
  console.log(paymentMethod)

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Metodo de Pagamento</FormLabel>
      <RadioGroup
        aria-label="paymentMethod"
        name="paymentMethod1"
        value={paymentMethod}
        onChange={handleChange}
      >
        <FormControlLabel
          value="creditcard"
          control={<Radio />}
          label="Cartão de Credito"
        />
        <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
      </RadioGroup>
    </FormControl>
  );
}
export default PaymentMethod