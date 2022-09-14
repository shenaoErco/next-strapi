export const formatDate = date =>{
    const newDate = new Date (date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return newDate.toLocaleDateString('es-US', options)
  }