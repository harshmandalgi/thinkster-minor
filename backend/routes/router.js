const express = require('express');
const router = express.Router();

const contact = require('../models/contactSchema.js');
const contact1 = require('../models/contactSchema1.js');

//retrieving contacts
router.get('/contacts', (req, res, next) => {
    contact.find((err, contacts)=>{
        res.json(contacts);
    })
});

router.get('/contacts1', (req, res, next) => {
    contact1.find((err, contacts)=>{
        res.json(contacts);
    })
});


//adding contacts
router.post('/contacts', (req, res, next) => {
    let newContact = new contact({
        code: req.body.code,
        title: req.body.title,
        url: req.body.url
    });

    console.log(newContact);

    newContact.save((err, contact)=>{
        if(err){
            res.send(err);
        }else{
            res.send(contact);
        }
    });
});


//adding contacts
router.post('/contacts1', (req, res, next) => {
    let newContact = new contact1({
        code: req.body.code,
        title: req.body.title,
        url: req.body.url
    });

    console.log(newContact);

    newContact.save((err, contact)=>{
        if(err){
            res.send(err);
        }else{
            res.send(contact);
        }
    });
});

//deleting a contact
router.delete('/contacts/:id', (req, res, next) => {
    contact.remove({code: req.params.id}, (err, result)=>{
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
});

//deleting a contact
router.delete('/contacts1/:id', (req, res, next) => {
    contact1.remove({code: req.params.id}, (err, result)=>{
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
});


module.exports = router;