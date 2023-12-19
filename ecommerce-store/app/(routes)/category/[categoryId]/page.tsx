export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage = () => {
    return (
        <div>Category Page</div>
    )
};

export default CategoryPage;