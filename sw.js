self.addEventListener('push', function(e) {
    var options = {
        body: 'Push notifikacija gnereirana iz push.js',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data:{
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions:[
            {action:'explore', title: 'Yoga začne danes čez 1 uro',
            icon: 'images/checkmark.png'},
            {action: 'close', title: 'Close',
            icon: 'images/xmark.png'},
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Živio', options)
    );

});