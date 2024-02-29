'use strict'

import { renderCardProduct } from "../components/cardProduct.js";
import { getData } from "../API/storeAPI.js";
import { renderUser } from "../components/cardUser.js";
const  cardDisplayArea = document.querySelector("#card");
const  userDisplayArea = document.querySelector("#user");
const productsData = await getData("product");
const product = productsData.products;
const users = await getData("user");
const user = users.users;
product.map(product=>{
    cardDisplayArea.innerHTML+=renderCardProduct(product);
})
user.map(user=>{
    userDisplayArea.innerHTML += renderUser(user)
})