var push = require('web-push')

let vapidKeys = { publicKey:
    'BLbtlS7we5fzkDbai-k7Co9wu_tWfiD5sZ-C2XlWZ3Rrd5we_XcMdTcvZMlVAYOhzNeM7zLtJ1Y9Av9RNcpQTRI',
   privateKey: 'jq91dNfut4wV9nhOKE7OPJfiA1sZlaeUXpHh_rq0hUY' }


   push.setVapidDetails('mailto:info@studionaut.com', vapidKeys.publicKey, vapidKeys.privateKey)

   let sub = {
    endpoint:"https://fcm.googleapis.com/fcm/send/fDDa28Guqpo:APA91bFmtpp7E3x0BAZHOEJy-MBgdUqQsljPRNpZRjPSsHJWJ9OpZEoPjYN0Hj5FZDXNwHGELoUc_vEt9vvcCZIY9SgvIaaPPmoqCZaqsvA5AZmAiIRcqNwiYLKA8aWrgzpYVUGbFvHc",
    expirationTime:null,
    keys:{
        p256dh:"BOXfY1-H_DSRAZ2KToeKzr9_N3hUO_2VWO2OkneTSW_eUDs4OZOZ_adP_AeWf6hQ88uTYwfj5AjV5N-02OOJKVQ",
        auth:"XDo5rFFdr--GDamSU9TXaA"
    }
   };
   push.sendNotification(sub, 'test message');