import {connect} from 'mongoose'

export default async function ConnectDB(URl) {
    return await connect(URl)
}