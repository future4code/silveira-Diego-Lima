import React, { useState } from 'react'
import { useGlobal } from '../../Global/GlobalStateContext'
import BasicModal from '../Modal/BasicModal'
import { BoxInform, BoxInformPriceButton, BoxNameQuantity, ContainerCardProduct, ImageProduct, InformAddButton, InformDescription, InformPrice, InformRemoveButton, NameProduct, QuantityProduct } from './styled'

const CardProduct = ({ product, restaurant }) => {
    const { requests, states } = useGlobal()
    const { addToCart, removeToCart } = requests
    const { cart } = states
    const [showModal, setShowModal] = useState(false)


    const choiceQuantity = (quantity) => {
        addToCart(product, quantity, restaurant)
        setShowModal(false)
    }

    const productInCart = cart.find((productCart) => productCart.id === product.id)



    return (
        <ContainerCardProduct>
            <ImageProduct src={product.photoUrl} />
            <BoxInform>
                <BoxNameQuantity>
                    <NameProduct>{product.name}</NameProduct>
                    {productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
                </BoxNameQuantity>
                <InformDescription>
                    {product.description}
                </InformDescription>
                <BoxInformPriceButton>
                    <InformPrice>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(`${product.price}`)}
                    </InformPrice>
                    {
                        productInCart ? <InformRemoveButton onClick={() => removeToCart(product.id)}>
                            Remove
                        </InformRemoveButton>
                            :
                            <InformAddButton onClick={() => setShowModal(true)}>
                                Adicionar
                            </InformAddButton>

                    }

                </BoxInformPriceButton>
                <BasicModal
                    open={showModal}
                    setOpen={setShowModal}
                    choiceQuantity={choiceQuantity} />
            </BoxInform>
        </ContainerCardProduct>
    )
}

export default CardProduct