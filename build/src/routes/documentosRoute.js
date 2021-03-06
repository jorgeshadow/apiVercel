"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentoscontroller_1 = require("../controllers/documentoscontroller");
class DocumentosRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.onConfig();
    }
    onConfig() {
        this.router.get('/setv/:dateant/:datedes', documentoscontroller_1.documentosController.obtenerDocumentos);
        this.router.post('/setpg/', documentoscontroller_1.documentosController.setdatespg);
        this.router.get('/datepg', documentoscontroller_1.documentosController.obtenerpg);
        this.router.get('/movedb', documentoscontroller_1.documentosController.moverdocumentos);
    }
}
const documentosRoute = new DocumentosRoute();
exports.default = documentosRoute.router;
