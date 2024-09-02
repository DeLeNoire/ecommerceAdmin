
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        id: 1,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp',
        name: 'Smartphone X Pro',
        status: 'ACTIVE',
        price: new Prisma.Number('999.00'),
        stock: 150,
        availableAt: new Date(),
      },
      {
        id: 2,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
        name: 'Wireless Earbuds Ultra',
        status: 'ACTIVE',
        price: new Prisma.Number('199.00'),
        stock: 300,
        availableAt: new Date(),
      },
      {
        id: 3,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp',
        name: 'Smart Home Hub',
        status: 'ACTIVE',
        price: new Prisma.Number('149.00'),
        stock: 200,
        availableAt: new Date(),
      },
      {
        id: 4,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp',
        name: '4K Ultra HD Smart TV',
        status: 'ACTIVE',
        price: new Prisma.Number('799.00'),
        stock: 50,
        availableAt: new Date(),
      },
      {
        id: 5,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp',
        name: 'Gaming Laptop Pro',
        status: 'ACTIVE',
        price: new Prisma.Number('1299.00'),
        stock: 75,
        availableAt: new Date(),
      },
      {
        id: 6,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/headset-lYnRnpjDbZkB78lS7nnqEJFYFAUDg6.webp',
        name: 'VR Headset Plus',
        status: 'ACTIVE',
        price: new Prisma.Number('349.00'),
        stock: 120,
        availableAt: new Date(),
      },
      {
        id: 7,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/watch-S2VeARK6sEM9QFg4yNQNjHFaHc3sXv.webp',
        name: 'Smartwatch Elite',
        status: 'ACTIVE',
        price: new Prisma.Number('249.00'),
        stock: 250,
        availableAt: new Date(),
      },
      {
        id: 8,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/speaker-4Zk0Ctx5AvxnwNNTFWVK4Gtpru4YEf.webp',
        name: 'Bluetooth Speaker Max',
        status: 'ACTIVE',
        price: new Prisma.Number('99.00'),
        stock: 400,
        availableAt: new Date(),
      },
      {
        id: 9,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/charger-GzRr0NSkCj0ZYWkTMvxXGZQu47w9r5.webp',
        name: 'Portable Charger Super',
        status: 'ACTIVE',
        price: new Prisma.Number('59.00'),
        stock: 500,
        availableAt: new Date(),
      },
      {
        id: 10,
        imageUrl:
          'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/thermostat-8GnK2LDE3lZAjUVtiBk61RrSuqSTF7.webp',
        name: 'Smart Thermostat Pro',
        status: 'ACTIVE',
        price: new Prisma.Number('199.00'),
        stock: 175,
        availableAt: new Date(),
      },
    ],
  });
}

main()
  .then(() => console.log('Seeding complete'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

