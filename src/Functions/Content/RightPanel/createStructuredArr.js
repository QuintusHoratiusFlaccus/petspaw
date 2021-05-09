export const createStructuredArr = (arr) => {
    return arr.map((el) => {
        return {
            name: el.breeds[0]?.name,
            id: el.breeds[0]?.id,
            image:
                {
                    id: el.id,
                    url : el.url
                }
        }
    })
}