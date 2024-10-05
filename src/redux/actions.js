export const increament = () => ({type: 'increament'})

export const decrement = () => ({type: 'decrement'})

export const cleare = () => ({type: 'cleare'})

export const AddComment = (body) => ({type: 'addCommet', payload: body})

export const deleteItem = (id) => ({type: 'deleteItem', payload: id})