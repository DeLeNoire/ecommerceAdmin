
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();


export type SelectProduct = Product;


export async function getProducts(
  search: string,
  offset: number
): Promise<{
  products: Product[];
  newOffset: number | null;

  totalProducts: number;
}> {
  if (search) {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
      take: 1000,
    });
    return {
      products,
      newOffset: null,
      totalProducts: 0,
    };
  }

  if (offset === null) {
    return { products: [], newOffset: null, totalProducts: 0 };
  }

  const totalProducts = await prisma.product.count();
  const moreProducts = await prisma.product.findMany({
    skip: offset,
    take: 5,
  });

  


  const newOffset = moreProducts.length >= 5 ? offset + 5 : null;

  return {
    products: moreProducts,
    newOffset,
    totalProducts,
  };
}

export async function deleteProductById(id: number) {
  await prisma.product.delete({
    where: { id },
  });
}
