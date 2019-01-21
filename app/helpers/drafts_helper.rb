module DraftsHelper
  def generate_packs(block, format)
    packs = []
    Card.uncached do
      if format == "draft"
        24.times {packs.push(generate_booster(block))}
      else
        6.times {packs.concat(generate_booster(block))}
      end
    end
    packs
  end

  def generate_booster(block)
    pack = []
    num = rand(1..8)

    if num === 1
      rare = Card.joins(:block).where(blocks: { code: block }).where(rarity: "Mythic").order("RAND()").limit(1)
    else
      rare = Card.joins(:block).where(blocks: { code: block }).where(rarity: "Rare").order("RAND()").limit(1)
    end

    uncommon = Card.joins(:block).where(blocks: { code: block }).where(rarity: "Uncommon").order("RAND()").limit(3)
    common = Card.joins(:block).where(blocks: { code: block }).where(rarity: "Common").where.not("cards.name LIKE ?", "%Guildgate%").order("RAND()").limit(10)
    land = Card.joins(:block).where(blocks: { code: block }).where("cards.name LIKE ?", "%Guildgate%").order("RAND()").limit(1)

    pack.concat(rare, uncommon, common, land)
  end
end
