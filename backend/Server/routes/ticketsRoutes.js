const express = require('express')
const { rooms } = require('../Controllers/roomsController')

const router = express.Router()

const ticketsController = require('../Controllers/ticketsController')
//get all ticekts for admin
router.route('/')
    .get(ticketsController.tickets)
    .post(ticketsController.addTicket)

router.route('/takenSeats')
    .post(ticketsController.takenSeats)

router.route('/:id')
    .get(ticketsController.getTicketById)
    .put(ticketsController.cancelTicket)


router.route('/admin/movie/:id')
    .get(ticketsController.getMovieTicketsById)

router.route('/ticket/:id')
    .get(ticketsController.getUserTicketById)

module.exports = router;