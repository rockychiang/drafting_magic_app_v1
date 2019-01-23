class Card < ApplicationRecord
  belongs_to :block
  serialize :types
  serialize :colors
end
