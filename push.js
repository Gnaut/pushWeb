var push = require('web-push')

let vapidKeys = { publicKey:
    'BLbtlS7we5fzkDbai-k7Co9wu_tWfiD5sZ-C2XlWZ3Rrd5we_XcMdTcvZMlVAYOhzNeM7zLtJ1Y9Av9RNcpQTRI',
   privateKey: 'jq91dNfut4wV9nhOKE7OPJfiA1sZlaeUXpHh_rq0hUY' }


   push.setVapidDetails('mailto:info@studionaut.com', vapidKeys.publicKey, vapidKeys.privateKey)

   let sub = {};
   push.sendNotification(sub, 'test message')