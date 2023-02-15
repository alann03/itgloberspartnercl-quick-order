import React, { useState, useEffect } from 'react';
import { useMutation, useLazyQuery } from 'react-apollo';
import UPDATE_CART from '../graphql/updateCart.graphql';
import GET_PRODUCT from '../graphql/getProductBySku.graphql';
import { useCssHandles } from 'vtex.css-handles';

import './styles.css';

const QuickOrder = () => {

    const CSS_HANDLES = [
        "quickOrder__container",
        "quickOrder__title",
        "quickOrder__form--container",
        "quickOrder__label-input--container",
        "quickOrder__container--label",
        "quickOrder__button--submit",
    ]

    const handles = useCssHandles(CSS_HANDLES)

    const [inputText, setInputText] = useState("");
    const [search, setSearch] = useState("");

    const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT);
    const [addToCart] = useMutation(UPDATE_CART);

    const handleChange = (evt: any) => {
        setInputText(evt.target.value);
    }

    useEffect(() => {
        if (product) {
            let skuId = parseInt(inputText)
            addToCart({
                variables: {
                    salesChannel: "1",
                    items: [
                        {
                            id: skuId,
                            quantity: 1,
                            seller: "1"
                        }
                    ]
                }
            })
                .then(() => {
                    window.location.href = "/checkout"
                })
        }
    }, [product, search])

    const addProductToCart = () => {
        getProductData({
            variables: {
                sku: inputText
            }
        });
    }

    const searchProduct = (evt: any) => {
        evt.preventDefault();
        if (!inputText) {
            alert("Ingresa algo!")
        } else {
            setSearch(inputText)
            addProductToCart()
        }
    }

    return <div className={handles["quickOrder__container"]}>
        <h2 className={handles["quickOrder__title"]}>Compra rápida</h2>
        <form className={handles["quickOrder__form--container"]} onSubmit={searchProduct}>
            <div className={handles["quickOrder__label-input--container"]}>
                <label className={handles["quickOrder__container--label"]} htmlFor='sku'>Ingresá el número de SKU:</label>
                <input id='sku' type='text' onChange={handleChange}></input>
            </div>
            <input className={handles["quickOrder__button--submit"]} type="submit" value="AÑADIR AL CARRITO" />
        </form>
    </div>
}

export default QuickOrder;