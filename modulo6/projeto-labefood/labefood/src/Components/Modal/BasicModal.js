import * as React from 'react';
import Modal from '@mui/material/Modal';
import { BoxModal, ButtonAddToCart, SelectQuantity, TitleModal } from './styled';


export default function BasicModal({ open, setOpen }) {


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
          <SelectQuantity>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </SelectQuantity>
          <ButtonAddToCart>
            Adicionar ao Carrinho
          </ButtonAddToCart>
        </BoxModal>

      </Modal>
    </>
  );
}
