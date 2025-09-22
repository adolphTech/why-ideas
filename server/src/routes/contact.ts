import { Router } from 'express';
import { ContactController } from '@/controllers/contactController';

const router = Router();
const contactController = new ContactController();

// POST /api/contact - Submit contact form
router.post('/contact', async (req, res, next) => {
  try {
    await contactController.submitContact(req, res);
  } catch (error) {
    next(error);
  }
});

// GET /api/contacts - Get all contacts (for admin use)
router.get('/contacts', async (req, res, next) => {
  try {
    await contactController.getContacts(req, res);
  } catch (error) {
    next(error);
  }
});

// GET /api/contacts/:id - Get contact by ID (for admin use)
router.get('/contacts/:id', async (req, res, next) => {
  try {
    await contactController.getContactById(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;