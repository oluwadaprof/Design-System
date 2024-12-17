export const glass = {
  className: 'glass',
  values: ['popup', 'tour'],
  transform(value: any) {
    let filter = 'blur(10px) saturate(190%) contrast(70%) brightness(80%)'

    if (value === 'popup') filter = 'blur(50px)'

    if (value === 'tour') filter = 'blur(35px)'

    return {
      backdropFilter: filter
    }
  }
}
