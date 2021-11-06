// initialize a new Stripe instance by requiring the stripe package
const stripe = require('stripe')('pk_test_TYooMQauvdEDq54NiTphI7jx')

// function postCharge is a request handler
async function postCharge(req, res) {
  try {
    // destructured all the variables expected to be sent with the request from the request object
    const { amount, source, receipt_email } = req.body

    // variable holds result of an asynchronous call to the Stripe API to create a new charge
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      receipt_email
    })

    // if result of Stripe call is a falsy value "undefined" then payment failed
    if (!charge) throw new Error('charge unsuccessful')

    res.status(200).json({
      message: 'charge posted successfully',
      charge
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = postCharge;