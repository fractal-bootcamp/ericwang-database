import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const exampleBook = {
    title: 'Example',
    isbn: '5678',
    authorId: 'fa3c6cc1-108a-47b7-831b-809111786727',
    memberId: '7c54113b-23dc-4bcf-b961-599f89304819'
}

async function addBook({ title, isbn, authorId, memberId }) {
    // add book
    await prisma.book.create({
        data: {
            title: title,
            isbn: isbn,
            authorId: authorId,
            memberId: memberId
        }
    })

    // check book was added
    const allBooks = await prisma.book.findMany()
    console.log(allBooks)
}

addBook(exampleBook)
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })