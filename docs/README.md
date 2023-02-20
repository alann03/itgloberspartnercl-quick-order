# Quick Order

El componente _Quick Order_ permite agregar un producto rapidamente al carrito de compras a través de su SKU.

![Media Placeholder](/assets/img/quick-order.PNG)

## Configuración

### Paso 1 - Agregar el componente a las dependencias de su aplicación

Dentro del archivo `manifest.json` de su aplicación, debe agregar la siguiente dependencia: 

```json
"dependencies": {
  ...
  "itgloberspartnercl.quick-order": "0.x"
  ...
}
```

### Paso 2 - Declarar el bloque principal en su aplicación

Agregue el bloque `quick-order` donde requiera utilizarlo dentro de su aplicación. Por ejemplo: 

```json
{
  "quick-order": {
    ...
  }
}
```

## Customización

Para aplicar personalizaciones de CSS en este y otros bloques, siga la guía [Uso de identificadores de CSS para la personalización de la tienda](https://developers.vtex.com/docs/guides/vtex-io-documentation-using-css-handles-for-store-customization).


| CSS HANDLES |
| -- |
| `quickOrder__container` |
| `quickOrder__title` |
| `quickOrder__form--container` |
| `quickOrder__label-input--container` |
| `quickOrder__container--label` |
| `quickOrder__button--submit` |


## Colaboradores

- **Alan Agustín Huismann**