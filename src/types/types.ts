export type TBook = {
    _id: string;
    user: string;
    author: string;
    title: string;
    description: string;
    genre: string;
}

export type TBookInput = {
    limit: number,
    offset: number,
}