import ProductController from "./controller/ProductController";

import { Router } from "express";

Router.get('/api/products', ProductController.getProduct);

