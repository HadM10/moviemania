const express = require('express')
const router = express.Router()

const ticketsController = require('../Controllers/ticketsController')
//get all ticekts for admin
router.route('/')
    .get(ticketsController.tickets)
    .post(ticketsController.addTicket)

router.route('/takenSeats')
    .post(ticketsController.takenSeats)

router.route('/userTickets')
    .post(ticketsController.getUserTickets)

router.route('/:id')
    .get(ticketsController.getTicketById)
    .put(ticketsController.cancelTicket)

router.route('/admin/movie/:id')
    .get(ticketsController.getMovieTicketsById)


module.exports = router;