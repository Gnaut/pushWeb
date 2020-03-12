self.addEventListener('push', function(e) {
    var options = {
        body: 'Odpadejo vadbe - Coronavirus',
        icon: 'images/studionautkrogi.png',
        vibrate: [100, 50, 100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        // actions:[
        //     {action:'explore', title: 'Vadb kmalu!',
        //     icon: 'images/studionautkrogi.png'},
        //     {action: 'close', title: 'Close',
        //     icon: 'images/studionautkrogi.png'},
        // ]
    };
    e.waitUntil(
        self.registration.showNotification('Nujno obvestilo', options)
    );

});