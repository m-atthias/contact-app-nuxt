import express from 'express';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
const upload = multer();
const prisma = new PrismaClient();
const api = express();

const UNPROCESSABLE_ENTITY = 403;

api.get('/', (_req, res) => {
    return res.send({
        message: 'Contact Api'
    });
});

api.get('/contacts', async (_req, res) => {
    const contacts = await prisma.contact.findMany({ orderBy: { id: 'desc' } });
    return res.json(contacts);
});

api.post('/contact', upload.none(), async (req, res) => {
    try {
        if (req.body.email) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(req.body.email)) {
                throw new Error('Email is missing');
            }
        }

        if (req.body.phone) {
            const regex = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
            if (!regex.test(req.body.phone)) {
                throw new Error('Phone is missing');
            }
        }
        const result = await prisma.contact.create({
            data: {
                name: req.body.name,
                type: req.body.type,
                email: req.body.email,
                phone: req.body.phone
            },
        });
        return res.json(result);
    } catch (e) {
        return res.json({ error: true, message: 'Could not create user: ' + e?.message ?? 'unknown error'});
    }
});

api.put('/contact/:id', async (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(UNPROCESSABLE_ENTITY).json({error: true, message: 'Invalid ID.'});
    }
    try {
        const contact = await prisma.contact.update({
            where: {
                id: Number(id)
            },
            data: { 
                ...(req.body.name) && {name: req.body.name},
                ...(req.body.type) && {type: req.body.type},
                ...(req.body.email) && {email: req.body.email},
                ...(req.body.phone) && {phone: req.body.phone},
             }
        });
        return res.json(contact);
    } catch (e) {
        return res.status(UNPROCESSABLE_ENTITY).res.json({error: true, message: 'Could not update contact.'});
    }
});

api.delete('/contact/:id', async (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) {
        return res.status(UNPROCESSABLE_ENTITY).json({error: true, message: 'Invalid ID.'});
    }
    try {
        const contact = await prisma.contact.delete({ 
            where: {
                id: Number(id)
            }
        });
        return res.json(contact);
    } catch (e) {
        return res.status(UNPROCESSABLE_ENTITY).res.json({error: true, message: 'Invalid ID.'});
    }
});

export default {
    path: '/api',
    nuxtI18n: false,
    handler: api
}