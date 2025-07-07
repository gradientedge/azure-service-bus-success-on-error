import { app } from '@azure/functions'


app.serviceBusQueue('fetch', {
  queueName: 'servicebussuccessonerror',
  cardinality: 'one',
  connection: 'AzureWebJobsServiceBus',
  handler: async (message, context) => {
    context.log('event', message)
    console.log('throwing exception')
    throw Error("error")
  },
})

