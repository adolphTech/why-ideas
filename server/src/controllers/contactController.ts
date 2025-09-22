import { Request, Response } from 'express';
import { contactFormSchema, ContactFormData } from '@/types/contact';
import { ContactModel } from '@/models/contactModel';

export class ContactController {
  private contactModel: ContactModel;

  constructor() {
    this.contactModel = new ContactModel();
  }

  async submitContact(req: Request, res: Response): Promise<void> {
    try {
      // Validate request body
      const validatedData: ContactFormData = contactFormSchema.parse(req.body);

      // Save to database only
      const savedContact = await this.contactModel.create(validatedData);

      res.status(201).json({
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          id: savedContact.id,
          submittedAt: savedContact.createdAt,
        },
      });
    } catch (error) {
      // Pass error to error handler middleware
      throw error;
    }
  }

  async getContacts(req: Request, res: Response): Promise<void> {
    try {
      const contacts = await this.contactModel.findAll();
      
      res.status(200).json({
        success: true,
        data: contacts,
        count: contacts.length,
      });
    } catch (error) {
      throw error;
    }
  }

  async getContactById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const contact = await this.contactModel.findById(id);

      if (!contact) {
        res.status(404).json({
          success: false,
          message: 'Contact not found',
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: contact,
      });
    } catch (error) {
      throw error;
    }
  }
}