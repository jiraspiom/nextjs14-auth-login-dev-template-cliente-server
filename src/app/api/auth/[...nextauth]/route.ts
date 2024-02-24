import nextAuth from 'next-auth'
import { options } from './options'

const handle = nextAuth(options)

export { handle as GET, handle as POST }
