import { PrismaClient } from '@prisma/client';
import { ContactFormData } from '@/types/contact';

export class ContactModel {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: ContactFormData): Promise<{ id: string; createdAt: Date }> {
    const contact = await this.prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      select: {
        id: true,
        createdAt: true,
      },
    });

    return contact;
  }

  async findAll(): Promise<Array<{
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
  }>> {
    return await this.prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string): Promise<{
    id: string;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
  } | null> {
    return await this.prisma.contact.findUnique({
      where: { id },
    });
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}