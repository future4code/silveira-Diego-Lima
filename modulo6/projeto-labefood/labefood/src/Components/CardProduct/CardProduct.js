import React, { useState } from 'react'
import BasicModal from '../Modal/BasicModal'
import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProduct, ImageProduct, InformButton, InformDescription, InformPrice, NameProduct } from './styled'

const CardProduct = ({ product }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <ContainerCardProduct>
            <ImageProduct src={product.photoUrl} />
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product.name}</NameProduct>
                </BoxNameQuantity>
                <InformDescription>
                    {product.description}
                </InformDescription>
                <BoxInformPriceButton>
                    <InformPrice>
                        {product.price}
                    </InformPrice>
                    <InformButton onClick={() => setShowModal(true)}>
                        Adicionar
                    </InformButton>
                </BoxInformPriceButton>
                <BasicModal open={showModal} setOpen={setShowModal} />
            </BoxInform>
        </ContainerCardProduct>
    )
}

export default CardProduct