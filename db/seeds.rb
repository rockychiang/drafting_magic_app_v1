cards = MTG::Card.where(set: 'grn').all

grn = Block.new
grn.name = cards.first.set_name
grn.code = cards.first.set
grn.save

cards.each do |card|
  c = grn.cards.new
  c.name = card.name
  c.rarity = card.rarity
  c.layout = card.layout
  c.cmc = card.cmc
  c.colors = card.color_identity
  c.types = card.types
  c.imgurl = card.image_url
  c.save
end
