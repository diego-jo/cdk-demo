export const handler = async (event, context) => {
  console.log(context)
  const sqsBody = event.Records[0]
  console.log(sqsBody)
  return sqsBody
}
