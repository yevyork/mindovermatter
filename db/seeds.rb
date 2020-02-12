# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Event.create([
    {
        date: 'March 9th 2019',
        imgurl: 'https://i.imgur.com/vJrYFyB.jpg',
        organizer: 'Mind/Matter',
        venue: 'The PaperBox',
        artists: 'Soel, Adam Braiman, Tony Paniro',
        supporting_artists: "",
        ticket_link: "",
        past_event: true
    }, 
    {
        date: 'June 7th 2019',
        imgurl: 'https://i.imgur.com/h9DcRHP.jpg',
        organizer: 'Mind/Matter',
        venue: 'Bogart House',
        artists: 'Keith Carnal, Hunter/Game, Adam Braiman',
        supporting_artists: "",
        ticket_link: "",
        past_event: true
    },
    {
        date: 'September 20th 2019',
        imgurl: 'https://i.imgur.com/cWWRnle.jpg',
        organizer: 'Mind/Matter',
        venue: 'Bogart House',
        artists: 'Soel, ⌀ostil, Amiti',
        supporting_artists: "",
        ticket_link: "",
        past_event: true
    },

    {
        date: 'November 29th 2019',
        imgurl: 'https://i.imgur.com/sqAFYxh.jpg',
        organizer: 'Mind/Matter X Techno Brooklyn',
        venue: 'Analog Brooklyn',
        artists: 'Agents Of Time, Unseen., Amiti',
        supporting_artists: "",
        ticket_link: "",
        past_event: true
    },
    {
        date: 'February 22nd 2020',
        imgurl: 'https://i.imgur.com/0NQafeM.jpg',
        organizer: 'Mind/Matter',
        venue: 'Knockdown Center',
        artists: 'Ae:ther[Live], Kevin De Vries, Moonwalk, Radio Slave, Woo York[Live]',
        supporting_artists: 'Adam Braiman',
        ticket_link: 'https://www.eventbrite.com/e/mind-matter-tickets-86608691929',
        past_event: false
    }

])

Merch.create([{
    img_url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1563914808-dolce-1563914802.jpg',
    title: 'Black Hoodie',
    description: '100% Breathable Cotton, True to Size',
    link_to_merch: 'https://www.amazon.com/Russell-Athletic-Dri-Power-Pullover-XXX-Large/dp/B004IZVFDE/ref=sr_1_2_sspa?keywords=black+hoodie&qid=1578946229&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFDNFNNS0ozTzE4SkomZW5jcnlwdGVkSWQ9QTA4NDUwMzlZSDRaRE9MRTVHV00mZW5jcnlwdGVkQWRJZD1BMDE0MTkwODJQUlZYNkFXVlBVWDkmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl'
},{
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/71Hb0ayzZkL._AC_UX569_.jpg',
    title: 'Black Tee',
    description: '100% Breathable Cotton, True to Size',
    link_to_merch:'https://www.amazon.com/Gildan-Ultra-Cotton-Black-X-Large/dp/B00GSIZMLU/ref=sr_1_6?dchild=1'
}
])

puts "You've officially been seeded, you sexy animal."