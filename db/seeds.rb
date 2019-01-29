cards = MTG::Card.where(set: 'rna').all

block = Block.new
block.name = cards.first.set_name
block.code = cards.first.set
block.save

cards.each do |card|
  c = block.cards.new
  c.name = card.name
  c.rarity = card.rarity
  c.layout = card.layout
  c.cmc = card.cmc
  c.colors = card.color_identity
  c.types = card.types
  c.imgurl = card.image_url
  c.save
end
