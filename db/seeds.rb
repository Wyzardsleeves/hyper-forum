# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Topic.create([
  {name: "Xbox", description: "Xbox Discussion, Microsoft stuff"},
  {name: "Playstation", description: "Sony boards reguarding everything PlayStation"},
  {name: "Nintendo", description: "Nintnedo forum for people who care."},
  {name: "PC", description: "All Windows and Macintosh gaming discussion. Who game's on Mac tho?"},
  {name: "Mobile", description: "Mobile segment because our boss told me to make one."},
  {name: "VR", description: "Virtual Reality boards but it's mostly Oculus. Meh."}
])

Post.create([
  {title: "Will Microsoft Skip E3 just like Sony?", content: "Microsoft has yet to give word on whether or not they will attend E3", topic_id: 1},
  {title: "PS games coming to PC", content: "God of War could come to PC and Infinite Sky is already being ported. Thoughts?", topic_id: 4},
  {title: "Does anybody actually care about Mobile games?", content: "They are only good for opting out of conversations.", topic_id: 5},
  {title: "Launch Titles?", content: "What kind of exclusives do you think we're going to see at the Playstation launch.", topic_id: 2},
  {title: "Xbox might be stronger than we thought!", content: "It's possibly got a AMD GPU that's more powerful than a 5700XT equivelant. That would be very impressive!", topic_id: 1},
  {title: "Nintendo to be bought?", content: "Apple and Amazon are both supposively eyeballing Nintendo as of a few months ago. What will this change?", topic_id: 3},
  {title: "Will Oculus actually kick off?", content: "Oculus has gotten more popular but people are still gaming on computer monitors and HDTVs. Who actually uses VR?", topic_id: 6},
  {title: "Zelda or naw?", content: "Nintendo might release a new Zelda game before", topic_id: 3},
  {title: "Crash Team Racing", content: "If they re-released Crash Team Racing what console would you play it on?", topic_id: 3},
  {title: "New GPU", content: "I'm looking for a GPU to upgrade to and my budget is $280. What should I get?", topic_id: 4},
  {title: "New games on VR", content: "Oculus could get another Batman game along with an open world Harry Potter!", topic_id: 6},
  {title: "PlayStation is expanding", content: "Sony announced yesterday that they were expanding the PlayStation brand onto PC's and turning it into a service.", topic_id: 2}
])

Comment.create([
  {content: "This is a test comment!", post_id: 2},
  {content: "This is another Comment in another thread.", post_id: 1},
  {content: "This is the ultimate comment.", post_id: 4},
  {content: "I will comment once more in a filibuster", post_id: 3},
  {content: "These comments are adding up!", post_id: 5},
  {content: "Comment about something!", post_id: 2},
  {content: "Something else is being commented about.", post_id: 1},
  {content: "This is the almost as good comment.", post_id: 4},
  {content: "This is the second to last comment let's make it count!", post_id: 3},
  {content: "I'm on Youtube right now while I work on this project", post_id: 5},
  {content: "This is a test comment!", post_id: 2},
  {content: "This is another Comment in another thread.", post_id: 1},
  {content: "This is the ultimate comment.", post_id: 4},
  {content: "I will comment once more in a filibuster", post_id: 7},
  {content: "These comments are adding up!", post_id: 6},
  {content: "Comment about something!", post_id: 8},
  {content: "Something else is being commented about.", post_id: 11},
  {content: "This is the almost as good comment.", post_id: 10},
  {content: "This is the second to last comment let's make it count!", post_id: 9},
  {content: "I'm on Youtube right now while I work on this project", post_id: 12},
  {content: "This is a test comment!", post_id: 2},
  {content: "This is another Comment in another thread.", post_id: 1},
  {content: "This is the ultimate comment.", post_id: 4},
  {content: "I will maximum comment once more in a filibuster", post_id: 3},
  {content: "These comments are adding up!", post_id: 5},
  {content: "Comment about something!", post_id: 2},
  {content: "Something else is being commented about.", post_id: 1},
  {content: "This is the almost as good comment.", post_id: 4},
  {content: "This is the second to last comment let's make it count!", post_id: 3},
  {content: "I'm on Youtube right now while I work on this project", post_id: 5},
  {content: "This is a test comment!", post_id: 2},
  {content: "This is another Comment in another thread.", post_id: 1},
  {content: "This is the ultimate comment.", post_id: 4},
  {content: "I will comment once more in a filibuster", post_id: 7},
  {content: "These comments are adding up!", post_id: 6},
  {content: "Comment about something!", post_id: 8},
  {content: "Something else is being commented about.", post_id: 11},
  {content: "This is the almost as good comment.", post_id: 10},
  {content: "This is the second to last comment let's make it count!", post_id: 9},
  {content: "I'm on Youtube right now while I work on this project", post_id: 12},
])


puts Topic.all
puts Post.all
puts Comment.all
