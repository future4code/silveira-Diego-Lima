import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { useGlobal } from "../../Global/GlobalStateContext";
import { FormLabelStyled, Hr } from "./styled";


const PaymentMethod = () => {
  const { states, setters } = useGlobal()
  const { paymentMethod } = states
  const { setPaymentMethod } = setters


  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabelStyled component="legend">Forma de Pagamento</FormLabelStyled>
      <Hr>      
      </Hr>
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