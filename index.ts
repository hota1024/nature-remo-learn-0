import dotenv from 'dotenv'
dotenv.config()
import * as NatureRemo from 'nature-remo'

const token = process.env.NATURE_TOKEN

if (!token) {
  throw new Error('NATURE_TOKEN is emtpy.')
}

const client = new NatureRemo.Cloud(token)

;(async () => {
  const devices = await client.getDevices()
  console.log(devices[0].newest_events.te)
})()
