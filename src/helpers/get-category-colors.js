const categoryMap = new Map()


categoryMap.set('Product Reviews','orange')
categoryMap.set('Opnions','green')
categoryMap.set('Travel Guides','purple')


const getCategoryColor = (category)  =>{
    return categoryMap.get(category)
}

export default getCategoryColor