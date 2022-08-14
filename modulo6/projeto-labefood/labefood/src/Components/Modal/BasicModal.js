import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { BoxModal, ButtonAddToCart, SelectQuantity, TitleModal } from './styled';


const BasicModal = ({ open, setOpen, choiceQuantity }) => {
 
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <BoxModal>
          <TitleModal>
            Selecione a quantidade desejada
          </TitleModal>
          <SelectQuantity onChange={(e) => setQuantity(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </SelectQuantity>
          <ButtonAddToCart onClick={() => choiceQuantity(Number(quantity))} >
            Adicionar ao Carrinho
          </ButtonAddToCart>
        </BoxModal>

      </Modal>
    </>
  );
}
export default BasicModal