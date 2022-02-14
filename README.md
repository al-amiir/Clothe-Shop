# Clothe Shop

an Ecommerce web app that fetch data from the GraphQL endpoint and to provide an interface to view and interact with this data.

Functionality requirements

- PLP - product listing page, a.k.a. category page
- PDP - product description page, a.k.a. product page
- Cart page + Cart overlay (minicart)

Details:

- Fetching data from graphQL endpoint.
- Filtering products by category name for all of the categories from BE.
- Ability to add/remove products and change their amounts in cart - on the cart page itself, PLP and PDP should be provided.
- selected options of added to cart products are visible in cart overlay and in cart page.
- Ability to change currency of the store to one of the available currencies

# Setup

## Run Server

in root

```
cd backend/

yarn install

yarn build

yarn start
```

## Run Client

in root

```
npm install

npm start
```
