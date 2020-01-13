# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Event.create([{
    date: 'February 22nd 2020',
    imgurl: 'https://i.imgur.com/0NQafeM.jpg',
    organizer: 'Mind/Matter',
    venue: 'Knockdown Center',
    artists: 'Ae:ther[Live], Kevin De Vries, Moonwalk, Radio Slave, Woo York[Live]',
    supporting_artists: 'Adam Braiman',
    ticket_link: 'https://www.eventbrite.com/e/mind-matter-tickets-86608691929',
    past_event: false
}])

Merch.create([{
    img_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1563914808-dolce-1563914802.jpg',
    title: 'Black Hoodie',
    description: 'Ultra warm, our logo, perfect for any time of day',
    link_to_merch: 'https://www.amazon.com/Russell-Athletic-Dri-Power-Pullover-XXX-Large/dp/B004IZVFDE/ref=sr_1_2_sspa?keywords=black+hoodie&qid=1578946229&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDNFNNS0ozTzE4SkomZW5jcnlwdGVkSWQ9QTA4NDUwMzlZSDRaRE9MRTVHV00mZW5jcnlwdGVkQWRJZD1BMDE0MTkwODJQUlZYNkFXVlBVWDkmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
}])

puts "You've officially been seeded, you sexy animal."