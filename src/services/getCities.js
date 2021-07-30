import DB from '../database.config'

/**
 * service that helps us to obtain the cities list.
 * @public
 * @function
 * @name getCitiesFromDB
 * @param {string} reminderID
 */
const getCitiesFromDB = (callback) => {
  DB.ref('/cities').once('value', (snapshot) => {
    const data = snapshot.val()
    callback(data)
  })
}

export default getCitiesFromDB
