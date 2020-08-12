const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const serverUrl = 'https://sandbox.2600hz.com:8443/v2';
const credentials = 'NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY=';
const accountId = '4642e64040cdb8b89c310a21a07c7f62';
const vmBoxId = 'b37675a2d7b90d60f0ee5d4175502394';
const requestUrl = `${serverUrl}/accounts/${accountId}/vmboxes/${vmBoxId}/messages`;
const headers = {
    Authorization: `Basic ${credentials}`
};

router.get('/messages', async function(req, res, next) {
    try {
        const data = await fetch(requestUrl, { headers });
        const json = await data.json();
        res.json(json)
      } catch (error) {
        res.status(500).send({ error: "Error de comunicación con la api" });
        console.log(error);
      }
});


module.exports = router;