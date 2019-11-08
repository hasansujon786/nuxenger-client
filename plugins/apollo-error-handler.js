export default (error, context) => {
  // console.log(error)
  console.warn({ error })
  // console.info('redirec from apoll errror handaler')
  // context.redirect('/login')
  // console.log(context)
  // context.error({ statusCode: 304, message: 'Apollo Server error' })
}
