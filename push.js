var push = require('web-push')

let vapidKeys = { publicKey:
    'BLbtlS7we5fzkDbai-k7Co9wu_tWfiD5sZ-C2XlWZ3Rrd5we_XcMdTcvZMlVAYOhzNeM7zLtJ1Y9Av9RNcpQTRI',
   privateKey: 'jq91dNfut4wV9nhOKE7OPJfiA1sZlaeUXpHh_rq0hUY' }


   push.setVapidDetails('mailto:info@studionaut.com', vapidKeys.publicKey, vapidKeys.privateKey)

   let sub = {

    // endpoint:"https://fcm.googleapis.com/fcm/send/co9anS_P_lM:APA91bEZXBtkCPXG4A6uDvdmDH5QlZsD0WScLlmfxXtsj3P5XEz6mjYdp-KHd85W7mtA7b1vlMVGSMmoMr7VebVvBarf36SXYbFKlu4k3rTEQUUpTKO7t3sm1Hn19xPk7m8kZ-QPFNpG",
    // expirationTime:null,
    // keys:{
    //     p256dh:"BJqbxU7_JGfO0w-0c9MGSW3oMPTVU9ta6Jqu4vEUdq_C2QGWL2dH2xgBa94ulYF2YQWA_Hd3eUm2ZDgmOcLYbiE",
    //     auth:"92EILkXc8H8n8OExPFPT8Q"} 

    //goran firefox pc
    
        endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeakIc6oXI6Z4Q9xZfquOZInp_HkfAQF_jpCcGMR5aANBu7XD7r7tStKuW21qu9OHHgz-oCMzKHgkmH283GfZSzUHjIuASG0JtHt9Wfmb6g5CwSILh3sK9KuIwoQglG57bqKjJS9e7Dvars13JZ4izEtWy3vSivumI4hkOpMONb0PIPF8",
        keys:{
            auth:"jfnqtYnKIByPtUC-zq1Q2w",
            p256dh:"BNBhH711QtRT5TRWVa92ifdewfjk2sOIUbOfpYZ_aQgaYWm8p80RvF6MSEAr3ftIfNlhtBlq0C82EkcUADAo-Zs"}



    //goran crome localhost
        // endpoint:"https://fcm.googleapis.com/fcm/send/e9kNQJTQLws:APA91bHpv4KH7ZvxoSrIy_kE3N41KCypcFJ8WV2j9sCjJrOICDDiGQ6MR3-A4co6hf72501QkUQWltLDEKTQVvv_7asWO2LTAhOsX54iZPDO-YdgbC3O4PwGAPjX9sRpSo9eroIMKPYR",
        // expirationTime:null,
        // keys:{
        //     p256dh:"BCROIc2Jz3Ctd0A-r-i8yqDcrNQNvm8Mirb0h8Q0rBBL8CQyhXwRPsjBoix96_TviHUL9fYaStefJcEjVpTRdSY",
        //     auth:"0JcCl8g5g-g_4dcgptrxSw"}


       // goran crome
    // endpoint:"https://fcm.googleapis.com/fcm/send/fDDa28Guqpo:APA91bFmtpp7E3x0BAZHOEJy-MBgdUqQsljPRNpZRjPSsHJWJ9OpZEoPjYN0Hj5FZDXNwHGELoUc_vEt9vvcCZIY9SgvIaaPPmoqCZaqsvA5AZmAiIRcqNwiYLKA8aWrgzpYVUGbFvHc",
    // expirationTime:null,
    // keys:{
    //     p256dh:"BOXfY1-H_DSRAZ2KToeKzr9_N3hUO_2VWO2OkneTSW_eUDs4OZOZ_adP_AeWf6hQ88uTYwfj5AjV5N-02OOJKVQ",
    //     auth:"XDo5rFFdr--GDamSU9TXaA"
    // }

    //    Alen crome
        // endpoint:
        // "https://fcm.googleapis.com/fcm/send/cYVrconrQ1I:APA91bEgO2hvL0BMXd6DQ__iQMM3rpqn6VUHIH5DY8KZtVJmQtW-COZkJ8FIFh2ki8txJZeKUmGW9jhlZpeYJ1c4tyIVlm--riKrmaZW0lrZEU3dEs6lR2isLJZaGuIcrEW2QdoUdb_a",
        // expirationTime:null,
        // keys:{
        //     p256dh:"BHrPJnnBH_gAA2ZIGj7gC63ppbOpLawj5cJ3SXvkEr2HVOrccOO_rwdgOIxtO4nUF2Yt9Nn6OVDo7VJIQlUKwTI",
        //     auth:"SYyK34PR1XQ_Xee0_57iHw"}


   };
   push.sendNotification(sub, 'test message');